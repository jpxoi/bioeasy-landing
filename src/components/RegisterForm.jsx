/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from "react";
import FetchCSVData from "../handlers/FetchCSVData";
import { calculateMaxDate, resetPrice, formatPrice } from "../utils/form-utils";
import toast from "react-hot-toast";
import HiddenInputs from "./register/HiddenInputs";
import StudentInfoFields from "./register/StudentInfoFields";
import CourseSelection from "./register/CourseSelection";
import CoursePrice from "./register/CoursePrice";
import PaymentSection from "./register/PaymentSection";
import PaymentEvidence from "./register/PaymentEvidence";
import TermsSection from "./register/TermsSection";
import Captcha from "./register/Captcha";
import LegalConsent from "./register/LegalConsent";
import SubmitSection from "./register/SubmitSection";

function RegisterForm({ orderIdentifier }) {
  const [coursesMounted, setCoursesMounted] = useState(false);
  const [files, setFiles] = useState([]);
  const [paymentNeeded, setPaymentNeeded] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPrice, setOrderPrice] = useState("");

  const cycleSelected = new URLSearchParams(window.location.search).get(
    "ciclo"
  );
  const courseSelected = new URLSearchParams(window.location.search).get(
    "course"
  );

  const coursesDataURL = import.meta.env.VITE_FORM_DATA_URL;
  const cdnURL = import.meta.env.VITE_CDN_URL;
  const coursesData = FetchCSVData(coursesDataURL);

  // On page load and when coursesData is fetched, set coursesMounted to true and render reCAPTCHA
  useEffect(() => {
    if (coursesData) {
      setCoursesMounted(true);
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [coursesData]);

  const maxDate = calculateMaxDate(15); // Min age of 15 years old

  // Function to handle the file upload
  const handleEvidenceUpload = (items) => {
    setFiles([...items.allEntries.filter((file) => file.status === "success")]);
  };

  const handleSubmission = (e) => {
    const evidenceErrorMessage = document.getElementById(
      "evidence-error-message"
    );
    const captchaErrorMessage = document.getElementById(
      "captcha-error-message"
    );
    const paymentMethodErrorMessage = document.getElementById(
      "payment-method-error-message"
    );
    const submitButton = document.getElementById("submit-button");

    let hasError = false;

    // eslint-disable-next-line no-undef
    if (typeof turnstile === "undefined" || !turnstile.getResponse()) {
      captchaErrorMessage.classList.remove("hidden");
      hasError = true;
    } else {
      captchaErrorMessage.classList.add("hidden");
    }

    if (files.length === 0 && paymentNeeded) {
      evidenceErrorMessage.classList.remove("hidden");
      hasError = true;
    } else {
      evidenceErrorMessage.classList.add("hidden");
    }

    if (paymentMethod === "" && paymentNeeded) {
      paymentMethodErrorMessage.classList.remove("hidden");
      hasError = true;
    } else {
      paymentMethodErrorMessage.classList.add("hidden");
    }

    if (orderIdentifier === "") {
      alert(
        "Error: No se pudo generar el identificador de inscripción. Por favor, intente nuevamente."
      );
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
      return;
    }

    submitButton.disabled = true;
    submitButton.value = "Enviando...";
  };

  const handleCopyToClipboard = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    toast("¡Texto copiado al portapapeles!", {
      position: "top-right",
      icon: "📋",
    });
  };

  const filterCourses = useCallback(() => {
    const course_select = document.getElementById("grid-course-select");
    const cycle_select = document.getElementById("grid-cycle-select");
    const selectedCycle = cycle_select?.value;

    Array.from(course_select.options).forEach((option) => {
      const course = coursesData.find((course) => course.id === option.value);
      if (course?.cycle === selectedCycle && course.available === "TRUE") {
        option.disabled = false;
        option.classList.remove("hidden");
      } else {
        option.disabled = true;
        option.classList.add("hidden");
      }
    });

    course_select.value = "";
    resetPrice();
  }, [coursesData]);

  const calculatePrice = useCallback(() => {
    const course_select = document.getElementById("grid-course-select");
    const submitButton = document.getElementById("submit-button");
    const consultDisclaimer = document.getElementById("consult-disclaimer");
    const selectedCourse = course_select?.value;
    const course = coursesData.find((course) => course.id === selectedCourse);

    if (course) {
      switch (course.price) {
        case "0":
        case "GRATUITO":
        case "GRATIS":
          setPaymentNeeded(false);
          setOrderPrice("GRATUITO");
          break;
        case "CONSULTAR":
          setPaymentNeeded(false);
          setOrderPrice("CONSULTAR CON UN ASESOR");
          consultDisclaimer.classList.remove("hidden");
          break;
        default:
          setPaymentNeeded(true);
          setOrderPrice(formatPrice(course.price, "PEN"));
          consultDisclaimer.classList.add("hidden");
      }

      submitButton.disabled = false;
    } else {
      resetPrice();
    }
  }, [coursesData]);

  useEffect(() => {
    if (courseSelected && coursesMounted) {
      calculatePrice();
    }

    const course_select = document.getElementById("grid-course-select");
    const cycle_select = document.getElementById("grid-cycle-select");

    course_select?.addEventListener("change", calculatePrice);
    cycle_select?.addEventListener("change", filterCourses);

    course_select?.addEventListener("change", calculatePrice);
    cycle_select?.addEventListener("change", filterCourses);

    return () => {
      course_select?.removeEventListener("change", calculatePrice);
      cycle_select?.removeEventListener("change", filterCourses);
    };
  }, [coursesMounted, courseSelected, calculatePrice, filterCourses]);

  return (
    <form
      className="w-full max-w-xl mt-8"
      action="https://submit-form.com/XdEPgIgpT"
      method="POST"
      onSubmit={handleSubmission}
    >
      <HiddenInputs orderIdentifier={orderIdentifier} />

      <StudentInfoFields maxDate={maxDate} cycleSelected={cycleSelected} />
      <CourseSelection coursesData={coursesData} courseSelected={courseSelected} />
      <CoursePrice orderPrice={orderPrice} />
      <PaymentSection
        paymentNeeded={paymentNeeded}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        cdnURL={cdnURL}
        orderIdentifier={orderIdentifier}
        handleCopyToClipboard={handleCopyToClipboard}
      />
      <PaymentEvidence
        paymentNeeded={paymentNeeded}
        files={files}
        handleEvidenceUpload={handleEvidenceUpload}
      />

      <TermsSection />

      <Captcha />

      <LegalConsent />

      <SubmitSection />
    </form>
  );
}

export default RegisterForm;
