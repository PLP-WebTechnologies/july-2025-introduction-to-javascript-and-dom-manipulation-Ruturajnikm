// -------------------------
// Part 1: Variables + Conditionals
// -------------------------
let userAge = 20;
let message;

if (userAge >= 18) {
  message = "You are an adult ✅";
} else {
  message = "You are a minor 🚸";
}

document.getElementById("part1-output").textContent = message;


// -------------------------
// Part 2: Functions
// -------------------------
// Function 1: calculate square
function squareNumber(num) {
  return num * num;
}

// Function 2: greet user
function greetUser(name) {
  return `Hello, ${name}! 👋`;
}

// Show function outputs
document.getElementById("part2-output").innerHTML =
  `Square of 5 = ${squareNumber(5)} <br> ${greetUser("Austin")}`;


// -------------------------
// Part 3: Loops
// -------------------------
let fruits = ["Apple", "Banana", "Cherry"];

// Loop 1: For loop
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  document.getElementById("part3-list").appendChild(li);
}

// Loop 2: While loop (countdown)
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}


// -------------------------
// Part 4: DOM Interactions
// -------------------------
// 1) Change title text on button click
document.getElementById("btn-change-text").addEventListener("click", () => {
  document.getElementById("title").textContent = "Title Changed! ";
});

// 2) Toggle background color
document.getElementById("btn-toggle-color").addEventListener("click", () => {
  document.body.classList.toggle("alt-background");
});

// 3) Add new item to list
document.getElementById("btn-add-item").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item Added!";
  document.getElementById("part3-list").appendChild(newItem);
});
