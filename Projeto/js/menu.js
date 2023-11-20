function changeMenu() {
  let ul = document.getElementById("ul-links");
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}


window.addEventListener('resize', function() {
  let ul = document.getElementById("ul-links");
  if(window.screen.width >= 650 && ul.style.display == "none"){
    ul.style.display = "flex";
  }

  if(window.screen.width < 650 && ul.style.display == "flex"){
    ul.style.display = "none";
  }
});