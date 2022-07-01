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
  const title = document.querySelector('#main-title')
  title.innerText = "DOM Toretto's World"

  // Part 2
  const body = document.querySelector('body')
  body.style.backgroundColor = '#BFDCFF'
  // Part 3
  const list = document.getElementById('favorite-things')
  list.removeChild(list.lastElementChild)

  // Part 4
  let special = document.querySelectorAll('.special-title')
  for (let i = 0; i < special.length; i++) {
    special[i].style.fontSize = '2rem'
  }
  // Part 5
  let races = document.getElementById('past-races')
  races.removeChild(races.children[3])

  // Part 6
  const newLi = document.createElement('li')
  newLi.innerHTML = 'Las Vegas'
  document.getElementById('past-races').appendChild(newLi)

  // Part 7
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'vegas')
  newDiv.setAttribute('class', 'blog-post purple')
  const divPlace = document.querySelector('.main')
  divPlace.appendChild(newDiv)

  const newH1 = document.createElement('h1')
  newH1.innerText = 'Las Vegas'
  const newPara = document.createElement('p')
  newPara.innerText = 'Everyone only saw my dust!'
  newDiv.append(newH1)
  newDiv.append(newPara)
}
