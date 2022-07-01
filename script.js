let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector('#main-title').innerText = 'DOM Toretto'

  // Part 2
  document.querySelector('body').style.backgroundColor = 'skyblue'

  // Part 3
  document.querySelector('#favorite-things li:last-child').remove()

  // Part 4
  let ferrariFont = document.querySelectorAll('#special-title')
  for (let i = 0; i < ferrariFont.length; i++) {
    ferrariFont[i].style.fontSize = '2rem'
  }

  // Part 5
  document.querySelector('#past-races li:Chicago').remove()

  // Part 6
  let newDomCity = document.createElement('Madrid')
  document.querySelector('#past-races').appendChild(newDomCity)

  // Part 7
}
