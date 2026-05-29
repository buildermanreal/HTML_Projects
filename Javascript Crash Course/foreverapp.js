//Expriemental script done outside of the crash course

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function delayy(delayy) {
  await delay(500);
}

async function printString(text, bgcolor, txtcolor) {
  await delay(500);
  const div = document.createElement("div");
  div.style.width = "70%";
  div.style.height = "30%";
  div.style.backgroundColor = bgcolor;
  div.style.color = txtcolor;
  div.innerHTML = text;
  document.getElementById("main").appendChild(div);
}

console.log("");
console.log("This is where our forever begins");
printString("This is where our forever begins", "rgb(255, 255, 255)");
printString("-----------------", "rgb(255, 255, 255)");
console.log("");
forever("Forever");

async function forever(String) {
  for (i = 1; i++; ) {
    content = String + " " + (i - 1);
    console.log(content);
    await delay(50);
    printString(
      content,
      "rgb(" + i + "," + (i - i * 2) + ",0",
      "rgb(" + (255 - i) + "," + (255 - i) + "," + (255 - i) + ")",
    );
  }
}
