// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById("stiky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("overlayer-menu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("overlayer-menu").style.width = "0%";
}

// Simple Light Box
$(function() {
  const $gallery = $(".gallery a").simpleLightbox();
});

// Portfolio Filter
const listItems = document.querySelectorAll(".portfolio-btn-container li");
const allimages = document.querySelectorAll(".portfolio-container .gallery a");

function toggleActiveClass(active) {
  listItems.forEach(item => {
    item.classList.remove("active");
  });
  active.classList.add("active");
}

function toggleimages(dataClass) {
  if (dataClass === "all") {
    for (let i = 0; i < allimages.length; i++) {
      allimages[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < allimages.length; i++)
      allimages[i].dataset.class === dataClass
        ? (allimages[i].style.display = "block")
        : (allimages[i].style.display = "none");
  }
}

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    toggleActiveClass(listItems[i]);
    toggleimages(listItems[i].dataset.class);
  });
}
