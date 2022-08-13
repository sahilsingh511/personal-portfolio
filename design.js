let spanValue = document.querySelectorAll("#a");
let slider = document.querySelectorAll(".range");

for (let i = 0; i < spanValue.length; i++) {
  spanValue[i].innerText = slider[i].value;
}

for (let i = 0; i < spanValue.length; i++) {
  slider[i].addEventListener("input", (e) => {
    spanValue[i].textContent = e.target.value;
  });
}

var typed = new Typed(".personality", {
  strings: ["Web Developer", "Web Designer", "Youtuber"],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  loop: true
});
