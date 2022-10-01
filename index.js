const bodyElem = document.querySelector("body");
const formElem = document.querySelector("form");
const colorContainer = document.querySelector(".color-container");

function colorGenerator() {
  let randomColor = "#";
  for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * 16).toString(16);
    randomColor += randomNum;
  }

  return randomColor;
}

console.log(colorGenerator());

formElem.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputOfColorNum = document.querySelector("#color-count");

  for (let numOfColor = 0; numOfColor < +inputOfColorNum.value; numOfColor++) {
    const color = document.createElement("div");
    color.classList.add("color");
    color.style.backgroundColor = colorGenerator();
    colorContainer.append(color);
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.innerText = "x";
    color.append(closeButton);
    const hexOfColor = document.createElement("p");
    hexOfColor.classList.add("color-hex");
    hexOfColor.innerText = colorGenerator();
    color.append(hexOfColor);
    closeButton.addEventListener("click", () => {
      color.remove();
    });
  }
  form.reset();
});

/*function add() {
  var inputName, inputcancel, container, P;
  //
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  container = document.getElementById("container");
  //
  P = document.createElement("p");
  P.innerHTML = "#" + randomColor;
  //
  inputName = document.createElement("input");
  inputName.id = "F";
  //
  inputcancel = document.createElement("input");
  inputcancel.type = "button";
  inputcancel.value = "x";
  inputcancel.setAttribute("onclick", "remove(this)");
  //
  P.appendChild(inputName);
  P.appendChild(inputcancel);
  container.appendChild(P);
}

function remove(input) {
  input.parentNode.remove();
}
const setBg = (e) => {
  let colored = document.querySelector("#F");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colored.style.background = "#" + randomColor;
};
genNew.addEventListener("click", (setBg) => {
  setBg();
});
const Child = document.querySelector(".chiled");
Child.add;*/
