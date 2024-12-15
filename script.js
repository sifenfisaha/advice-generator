const xhr = new XMLHttpRequest();
const count = document.querySelector("#count");
const advice = document.querySelector("#advice");
const btn = document.querySelector("#btn");
function generateAdvice() {
  xhr.open("GET", "https://api.adviceslip.com/advice");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      advice.innerHTML = data.slip.advice;
      count.innerHTML = data.slip.id;
    }
  };
  xhr.send();
}
btn.addEventListener("click", generateAdvice);
