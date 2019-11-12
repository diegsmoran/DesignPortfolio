// Define the modals

var modal = document.getElementById("myModal");

// Define <span> element that closes the modal

var spanElements = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal

spanElements.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
