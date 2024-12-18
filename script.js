const xhr = new XMLHttpRequest();
const image = document.getElementById("icon");
const count = document.querySelector("#count");
const advice = document.querySelector("#advice");
const btn = document.querySelector("#btn");

function generateAdvice() {
  xhr.open("GET", "https://api.adviceslip.com/advice");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      image.classList.add("roll-img");
      setTimeout(() => {
        const data = JSON.parse(this.responseText);
        advice.innerHTML = `"${data.slip.advice}"`;
        count.innerHTML = data.slip.id;
        image.classList.remove("roll-img");
      }, 500);
    }
  };
  xhr.send();
}

btn.addEventListener("click", generateAdvice);
