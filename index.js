const JSCarousel = ({ carouselSelector, slideSelector }) => {
  /*
   * Initialize variables to keep track of carousel state and
   * references to different elements.
   */
  let currentSlideIndex = 0;
  let prevBtn, nextBtn;

  // Find the carousel element in the DOM.
  const carousel = document.querySelector(carouselSelector);

  // If carousel element is not found, log an error and exit.
  if (!carousel) {
    console.error("Specify a valid selector for the carousel.");
    return null;
  }

  // Find all slides within the carousel
  const slides = carousel.querySelectorAll(slideSelector);

  // If no slides are found, log an error and exit.
  if (!slides.length) {
    console.error("Specify a valid selector for slides.");
    return null;
  }

  /*
   * Utility function to create and append HTML elements with
   * attributes and children.
   */
  const addElement = (tag, attributes, children) => {
    const element = document.createElement(tag);

    if (attributes) {
      // Set attributes to the element.
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    if (children) {
      // Set content to the element.
      if (typeof children === "string") {
        element.textContent = children;
      } else {
        children.forEach((child) => {
          if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(child);
          }
        });
      }
    }

    return element;
  };

  /*
   * Modify the DOM structure and add required containers and controls
   * to the carousel element.
   */
  const tweakStructure = () => {
    carousel.setAttribute("tabindex", "0");

    // Create a div for carousel inner content.
    const carouselInner = addElement("div", {
      class: "carousel-inner",
    });
    carousel.insertBefore(carouselInner, slides[0]);

    /*
     * Move slides from the carousel element to the carousel inner
     * container to facilitate alignment and set initial alignment
     * styles for the slides.
     */
    slides.forEach((slide, index) => {
      carouselInner.appendChild(slide);
      slide.style.transform = `translateX(${index * 100}%)`;
    });

    // Create and append previous button.
    prevBtn = addElement(
      "btn",
      {
        class: "carousel-btn carousel-btn--prev-next carousel-btn--prev",
        "aria-label": "Previous Slide",
      },
      "<"
    );
    carouselInner.appendChild(prevBtn);

    // Create and append next button.
    nextBtn = addElement(
      "btn",
      {
        class: "carousel-btn carousel-btn--prev-next carousel-btn--next",
        "aria-label": "Next Slide",
      },
      ">"
    );
    carouselInner.appendChild(nextBtn);
  };

  // Adjust slide positions according to the currently selected slide.
  const adjustSlidePosition = () => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currentSlideIndex)}%)`;
    });
  };

  // Update the overall carousel state.
  const updateCarouselState = () => {
    adjustSlidePosition();
  };

  // Move slide left and right based on direction provided.
  const moveSlide = (direction) => {
    const newSlideIndex =
      direction === "next"
        ? (currentSlideIndex + 1) % slides.length
        : (currentSlideIndex - 1 + slides.length) % slides.length;
    currentSlideIndex = newSlideIndex;
    updateCarouselState();
  };

  // Event handlers for previous and next button clicks.
  const handlePrevBtnClick = () => moveSlide("prev");
  const handleNextBtnClick = () => moveSlide("next");

  // Attach event listeners to relevant elements.
  const attachEventListeners = () => {
    prevBtn.addEventListener("click", handlePrevBtnClick);
    nextBtn.addEventListener("click", handleNextBtnClick);
  };

  // Initialize/create the carousel.
  const create = () => {
    tweakStructure();
    attachEventListeners();
  };

  // Destroy the carousel/clean-up.
  const destroy = () => {
    // Remove event listeners.
    prevBtn.removeEventListener("click", handlePrevBtnClick);
    nextBtn.removeEventListener("click", handleNextBtnClick);
  };

  // Return an object with methods to create and destroy the carousel.
  return { create, destroy };
};

const carousel1 = JSCarousel({
  carouselSelector: "#carousel-1",
  slideSelector: ".slide",
});

carousel1.create();

window.addEventListener("unload", () => {
  carousel1.destroy();
});

document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Target the submit button on click
  var submitButton = document.querySelector("#myForm button[type='submit']");

  submitButton.addEventListener("click", function (event) {
    // Step 2: Prevent default form submission behavior
    event.preventDefault();

    // Step 3: Replace the form element with a success message container
    var form = document.getElementById("myForm");
    var successContainer = document.createElement("div");
    successContainer.classList.add("success-container");

    var successMessage = document.createElement("div");
    successMessage.textContent =
      "Thank you! While you wait, you can explore our learn articles.";
    successContainer.appendChild(successMessage);

    // Step 4: Add a button linking to the /learn HTML page inside the success message container
    var learnButton = document.createElement("button");
    learnButton.textContent = "Explore Learn Articles";
    learnButton.addEventListener("click", function () {
      window.location.href = "/learn"; // Change this to the actual URL of the learn page
    });
    successContainer.appendChild(learnButton);

    // Replace the form with the success container
    form.parentNode.replaceChild(successContainer, form);
  });
});

function enlargeImage(event) {
  // Get the clicked image element
  var clickedImage = event.target;

  // Check if the device is a phone
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Calculate the new width and height for the enlarged image
    var newWidth = clickedImage.width * 3;
    var newHeight = clickedImage.height * 3;

    // Set the new width and height for the clicked image
    clickedImage.style.width = newWidth + "px";
    clickedImage.style.height = newHeight + "px";
  }
}

// Add event listener to each image
var images = document.querySelectorAll(".slide-content img");
images.forEach(function (image) {
  image.addEventListener("click", enlargeImage);
});

var toggleMenuCheckbox = document.getElementById("toggle-menu");
var mobileNav = document.querySelector(".mobile-nav nav");
var activeMenuImg = document.querySelector(".active");
var inactiveMenuImg = document.querySelector(".inactive");
var hamImg = document.getElementById("ham-img");

var closeImg = document.getElementById("close-img");
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the ham-img
  hamImg.addEventListener("click", function () {
    // Toggle the visibility of the images
    hamImg.style.display = "none";
    closeImg.style.display = "block";

    // Swap the IDs of the images
    hamImg.id = "close-img";
    closeImg.id = "ham-img";
  });

  // Add event listener to the close-img
  closeImg.addEventListener("click", function () {
    // Toggle the visibility of the images
    closeImg.style.display = "none";
    hamImg.style.display = "block";

    // Swap the IDs of the images
    closeImg.id = "ham-img";
    hamImg.id = "close-img";
  });
  // Add event listener to the toggle-menu element
  toggleMenuCheckbox.addEventListener("click", function () {
    // Toggle the display of mobileNav
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "block";
    }

    // Toggle the classes of menu images
    activeMenuImg.classList.toggle("active");
    activeMenuImg.classList.toggle("inactive");
    inactiveMenuImg.classList.toggle("active");
    inactiveMenuImg.classList.toggle("inactive");
  });
});

function downloadPDF(pdfPath) {
  // Create an anchor element
  const link = document.createElement("a");
  link.href = pdfPath;

  // Set the download attribute and filename
  link.download = pdfPath.split("/").pop(); // Extract filename from path

  // Append the anchor element to the document body
  document.body.appendChild(link);

  // Trigger the click event
  link.click();

  // Remove the anchor element
  document.body.removeChild(link);
}
