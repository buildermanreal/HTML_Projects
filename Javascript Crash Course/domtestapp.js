//First way to access an element
console.log(document.querySelector("h1"));

//Second way to access an element
console.log(document.getElementById("title"));

function changeTitle() {
  console.log("changedtitle");
  document.querySelector(".title").innerHTML = "Test";
  document.querySelector(".title").style.fontSize = "500%";
  document.querySelector(".title").style.color = "blue";
}

function toggleDarkMode(){
    console.log("themechanged")
    document.querySelector("body").classList.toggle("dark-theme")
}