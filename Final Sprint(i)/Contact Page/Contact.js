let selectMenu = document.querySelector("#Advice");
selectMenu.addEventListener("click", loadAdvice);
function loadAdvice() {
  let url = `https://api.adviceslip.com/advice`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (this.status === 200) {
      let slip = JSON.parse(this.responseText);
      console.log(slip.slip.advice);
      output = `<h4>${slip.slip.advice}</h4>`;
    }
    document.querySelector(".output").innerHTML = output;
  };
  xhr.send();
}
