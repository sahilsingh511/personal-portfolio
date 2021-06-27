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
