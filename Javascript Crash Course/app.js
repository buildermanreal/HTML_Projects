console.log("app loaded"); //check if script is running
counter = (Math.random() * 250 + 50).toFixed();
i = 0;
let weatherIsHot = Math.random() < 0.5;
weatherIsHot
  ? console.log("It's hot outside.")
  : console.log("It's cold outside.");
console.log("the counter is " + counter + ", cool.");
console.log("Hello"[0]);
while ("Hello".length > i) {
  //print each letter in the word
  i += 1;
  console.log("Hello"[i]);
}
count = 0;
while (count < 10) {
  //while vs for loop
  count += 1;
  console.log(count);
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("");
for (let i = 1; i <= 20; i++) {
  iDivBy5 = i % 5 === 0;
  iDivBy3 = i % 3 === 0;
  if (!iDivBy5 && !iDivBy3) {
    console.log(i);
  } else if (iDivBy3 && iDivBy5) {
    console.log(i + " is Divisible by both 3 and 5");
  } else if (iDivBy3) {
    console.log(i + " is Divisible by 3");
  }
  if (iDivBy5) {
    console.log(i + " is Divisible by 5");
  }
}
const name = "Geb"; //const cannot be reassigned.
console.log("");
console.log(name[3 - 1]);
console.log("");

scriptLoaded = Math.random() < 0.5; //randomize boolean
good = Math.random() < 0.5;
console.log("the script load value is " + scriptLoaded);
if (scriptLoaded == true) {
  console.log("script is loaded.");
} else {
  console.error("script not loaded.");
}

if (good !== scriptLoaded) {
  console.error("Good not equal to Script Load value.");
} else if (scriptLoaded == true) {
  console.log("Good is equal and the Script Load value is true");
} else {
  console.log("Good is equal to Script Load value.");
}

if (good === scriptLoaded && scriptLoaded == true) {
  console.log("A huge success.");
}

let price = 99.99;
let cash = (Math.random() * 250 + 50).toFixed(2);
let difference = (cash - price).toFixed(2);
let isStoreOpen = Math.random() < 0.5;

if (isStoreOpen) {
  console.log("Item cost: $" + price);
  if (cash > price) {
    console.log(
      "You paid more than the item cost, here's $" + difference + " in change.",
    );
    console.log("your cash was: $" + cash);
    console.log("after paying, you have $" + difference + " left.");
  } else if (cash === price) {
    console.log("You paid the exact amount, thank you.");
  } else {
    console.log("Your cash is: $" + cash);
    console.error(
      "Sorry, you can't afford this item. You need $" +
        (difference * -1).toFixed(2) +
        " more to buy this item.",
    );
  }
} else {
  console.error("The store is closed today.");
}
cash > price && isStoreOpen == true
  ? console.log("Give receipt")
  : console.error("Do not give receipt.");

if (
  (cash >= price && isStoreOpen) ||
  scriptLoaded == true ||
  good === scriptLoaded
) {
  if (
    cash >= price &&
    isStoreOpen &&
    scriptLoaded == true &&
    good === scriptLoaded
  ) {
    console.log("Wonderful! Everything was a success.");
  } else {
    console.log("At least one thing was a success.");
  }
} else {
  console.error("Oh... nothing worked out today...");
}

console.log("");

const convertCtoF = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCtoF(0));

console.log("");
