document.addEventListener("DOMContentLoaded", function () {
  // Get the hamburger menu checkbox and the mobile nav element
  var toggleMenuCheckbox = document.getElementById("toggle-menu");
  var mobileNav = document.querySelector(".mobile-nav nav");

  // Add event listener to the hamburger menu checkbox
  toggleMenuCheckbox.addEventListener("change", function () {
    // If the checkbox is checked, display the mobile nav; otherwise, hide it
    if (this.checked) {
      mobileNav.style.display = "block";
    } else {
      mobileNav.style.display = "none";
    }
  });
});
