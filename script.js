let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector("#main-title").innerText = "DOMs Website"
  // Part 2
  document.querySelector("body").style.backgroundColor = "pink"
  // Part 3
  document.querySelector("#favorite-things li:last-child").remove()
  // Part 4
  let font = document.querySelectorAll(".special-title")
  font.forEach(fontChange)

  function fontChange(font) {
    font.style.fontSize = "2rem"
  }

  // Part 5
  document.querySelectorAll("#past-races li")[3].remove()

  // Part 6
  let ul = document.querySelector("#past-races")
  let li = document.createElement("li")
  let text = document.createTextNode("NYC")
  li.appendChild(text)
  ul.appendChild(li)

  // Part 7
  let m = document.querySelector(".main")
  let div = document.createElement("div")
  div.className = "blog post purple"
  div.style.height = "250px"
  div.style.margin = "3rem"
  div.style.height = "2rem"
  div.style.borderRadius = "1rem"
  let h1 = document.createElement("h1")
  h1.innerText = "NYC"
  h1.style.color = "white"
  let p = document.createElement("p")
  p.innerText = "Went to the statue of Liberty!"
  p.style.color = "black"
  h1.appendChild(p)
  div.appendChild(h1)
  m.appendChild(div)
}
