// Function to calculate max date for date of birth input field (min 16 years old)
export const calculateMaxDate = (minAge) => {
  const today = new Date();
  const yyyy = today.getFullYear() - minAge;
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export const resetPrice = () => {
  const course_price = document.getElementById("grid-course-price");
  course_price.value = "";
};

export const formatPrice = (price, currency) => {
  const formatters = {
    PEN: new Intl.NumberFormat("es-PE", { style: "currency", currency }),
    USD: new Intl.NumberFormat("en-US", { style: "currency", currency }),
  };

  return formatters[currency]?.format(price) ?? price;
};

export const addInvalidClasses = () => {
  const phoneNumberContainer = document.getElementById(
    "phone-number-container"
  );
  const inputs = document.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    if (input.required) {
      input.classList.add("invalid:border-red-500");
    }
  });
  phoneNumberContainer.classList.add("has-invalid:border-red-500");
};

export const generateIdentifier = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const seed = Date.now();
  let identifier = "";
  for (let i = 0; i < 6; i++) {
    // Use seed to generate a random number between 0 and 35
    const random = Math.floor(Math.random() * seed);
    // Use random to get a character from the characters string
    identifier += characters.charAt(random % 36);
  }
  return identifier;
}