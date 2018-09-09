var link = document.querySelector(".appointment-main-button");
var popup = document.querySelector(".appointment-popup");
var form = document.querySelector(".appointment-form");
var dateEntry = document.querySelector(".date-entry");
var dateLeave = document.querySelector(".date-leave");
var grownup = document.querySelector(".input-grownup");

var children = document.querySelector(".input-children");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  dateEntry.focus();
});

form.addEventListener("submit", function(evt) {
  if (!dateEntry.value || !dateLeave.value || !grownup.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});