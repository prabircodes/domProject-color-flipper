const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "orange",
  "hotpink",
  "orangered",
  "gold",
  "khaki",
]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
  // get radom number between 0-7 colors[3]
  const randomNumber = getRandomNumber()
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
