
// Get the modal
var popup = document.getElementsByClassName("popup-container")[0];

// When the user clicks the button, open the popup 
function openPopup() {
    popup.style.display = "block";
}

// When the user clicks on x, close the popup
var cls = document.getElementsByClassName("popup-close")[0];
cls.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}

// Quantity Slider
var slideValue = document.getElementById("result-value");
var inputSlider = document.getElementById("slider-value");
inputSlider.oninput = (()=>{
  slideValue.textContent = inputSlider.value;
});