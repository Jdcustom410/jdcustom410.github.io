// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Example interactive snippet (just to test your JS)
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("This could open a demo or project!");
  });
});
