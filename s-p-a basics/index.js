function handleClick(elem) {
  elem.style = "background-color:green; width:500px; height:50px";
  alert("Clicked");
}
var box = document.getElementById("box");
box.addEventListener("mouseover", function () {
  box.innerHTML = "nicht anfassen";
  this.style = "box-shadow: 5px 5px 5px red; width:600px;font-size:5rem";
  //   this.style.fontSize = "5rem";
});
box.addEventListener("click", function () {
  this.style = "background-color:green";
  alert("du hast mich geändert");
});

box.addEventListener("mouseout", function () {
  this.style = "width:300px;font-size:5rem";
  box.innerHTML = "mein gott!!!!";
  //   this.style = "font-size:5rem";
});
