const button = document.querySelector("button");
console.log(button);

const div = document.querySelector("div");
function somar() {
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    alert("Limite atingido!");
  }
}

button.addEventListener("click", somar);
