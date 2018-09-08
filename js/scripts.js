var link = document.querySelector(".appointment-main-button");
var popup = document.querySelector(".appointment-popup");
var dateEntry = document.querySelector(".date-entry");
var dateLeave = document.querySelector(".date-leave");
var grownup = document.querySelector(".grownup");
var children = document.querySelector(".children");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("dateEntry");
  storage = localStorage.getItem("dateLeave");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});