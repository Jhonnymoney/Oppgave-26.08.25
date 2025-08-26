let message = document.getElementById("message");

document.querySelector("#myBtn").addEventListener("click", () => {
  const container = document.querySelector("#container");
  container.innerHTML =
    '<img src="./Images/Cat.jpg" alt="Cat picure" style="width: 200px;">';
});
//
document.addEventListener("DOMContentLoaded", () => {
  message.textContent = "Click the button for a picture of a cat";
});
// Sett standardtekst
