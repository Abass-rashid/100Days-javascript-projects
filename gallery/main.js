const content = document.getElementById("content");
const imgs = document.querySelectorAll(".imgs");
const opacity = 0.6;

imgs.forEach((img) =>
  img.addEventListener("click", (e) => {
    img.classList.add("fade-in");
    setTimeout(() => img.classList.remove("fade-in"), 300);
    content.src = e.target.src;
  })
);
