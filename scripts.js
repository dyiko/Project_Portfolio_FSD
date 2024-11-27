//about me section
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("active-tab");
// let tablinks=document.getElementsByClassName("tab-links");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//services section

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".image-slider");

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let currentIndex = 0;

    // Set the first image as active
    images[currentIndex].classList.add("active");

    setInterval(() => {
      // Remove active class from the current image
      images[currentIndex].classList.remove("active");

      // Calculate the next image index
      currentIndex = (currentIndex + 1) % images.length;

      // Add active class to the next image
      images[currentIndex].classList.add("active");
    }, 3000); // Change image every 3 seconds
  });
});
//for responsive nav
document.getElementById("menu-icon").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");
  menu.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});
document.getElementById("close-icon").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");
  menu.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
//for navigating
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
//form data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxfAfzIc4WKY_vtTq8SWqQiQR2wRBaYH9Gj-r3I3gPerPXRuTyWSSQStmfUp2Sor5Qk/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
//show more
document.getElementById("toggleButton").addEventListener("click", function () {
  var hiddenContent = document.getElementById("hiddenContent");
  var toggleButton = document.getElementById("toggleButton");

  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    toggleButton.textContent = "See Less";
  } else {
    hiddenContent.style.display = "none";
    toggleButton.textContent = "See More";
  }
});
