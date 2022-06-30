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
  const heading = document.getElementById('main-title')
  heading.textContent = 'Fast and Furious'

  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = 'pink'

  // Part 3
  const ul = document.querySelector('#favorite-things')
  ul.lastElementChild.style.display = 'none'

  // Part 4
  const allTitle = document.querySelectorAll('.special-title')
  for (let el of allTitle) {
    el.style.fontSize = '2rem'
  }

  // Part 5

  const pastRaces = document.querySelector('#past-races').children
  for (let el of pastRaces) {
    if (el.textContent === 'Chicago') {
      el.style.display = 'none'
    }
  }

  // Part
  const pastRaces2 = document.querySelector('#past-races')
  const newLi = document.createElement('li')
  newLi.textContent = 'Atlanta'
  pastRaces2.appendChild(newLi)

  // Part 7
  const newDiv = document.createElement('div')
  const newH1 = document.createElement('h1')
  const newP = document.createElement('p')
  const domAdventure = document.querySelector('.main')
  console.log(domAdventure)

  newDiv.classList.add('blog-post')
  newDiv.classList.add('purple')
  newH1.textContent = 'Atlanta'
  newP.textContent = 'I dumped my car from the sky'
  newDiv.append(newH1)
  newDiv.append(newP)
  domAdventure.appendChild(newDiv)
}
