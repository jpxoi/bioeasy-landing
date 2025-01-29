import { Link } from "react-router-dom";
import fallback from ".././assets/img/fallback_card.webp";
import "react-loading-skeleton/dist/skeleton.css";

function CourseCard(course) {
  const { id, title, description, image, tag, category, link } = course.course;
  const imageavif = image ? image.replace("webp", "avif") : null;
  const cdnURL = import.meta.env.VITE_CDN_URL;
  const cropped_description =
    description.length > 250
      ? description.substring(0, 250) + "..."
      : description;

  const class_name = `course__card mix ${category} max-w-sm bg-white border border-gray-200 rounded-lg shadow`;

  return (
    <div className={class_name} id={id}>
      <div className="course__card__image">
        <picture className="rounded-t-lg">
          <source
            srcSet={imageavif ? `${cdnURL}${imageavif}` : fallback}
            type="image/avif"
          />
          <source
            srcSet={image ? `${cdnURL}${image}` : fallback}
            type="image/webp"
          />
          <img
            className="rounded-t-lg"
            loading="lazy"
            src={image ? image : fallback}
            alt={title}
            width="800"
            height="1000"
          />
        </picture>
      </div>
      <div className="text-center course__card__content flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="items-center rounded-md bg-[#005FAE] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#005FAE]/20">
              UPAO
            </span>
            {/*
          <span className="items-center rounded-md bg-[#E30512] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#E30512]/20">
            UCV
          </span>
          <span className="items-center rounded-md bg-[#fdba30] px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-[#fdba30]/20">
            UPN
          </span> */}
            <span className="items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-800 ring-1 ring-inset ring-teal-600/20">
              {tag}
            </span>
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </div>
        <p className="font-normal text-sm text-gray-700 text-pretty">
          {cropped_description}
        </p>
        <div className="flex justify-center items-end">
          <Link
            to={link}
            preventScrollReset={false}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 transition-all"
          >
            Inscríbete
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
