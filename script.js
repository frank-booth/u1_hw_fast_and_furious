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
  document.getElementById('main-title').innerText = 'Something Shorter'
  // Part 2
  document.querySelector('body').style.backgroundColor = 'purple'
  // Part 3
  let lastFave = document.querySelector('#favorite-things').lastElementChild
  lastFave.remove()
  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')

  specialTitle.forEach((elephant) => {
    elephant.style.fontSize = '2rem'
  })

  // Part 5
  document.querySelectorAll('#past-races li')[3].remove()

  // Part 6
  const createNewRace = () => {
    let ul = document.querySelector('#past-races')
    let li = document.createElement('li')
    li.innerText = 'Chernobyl'
    ul.appendChild(li)
  }
  createNewRace()

  // Part 7
  const blogPost = document.createElement('div')
  let adventures = document.querySelector('.main')
  blogPost.className = 'blog-post purple'
  blogPost.innerHTML = '<h1>Chernobyl</h1> <p>My skin hurts</p>'
  adventures.appendChild(blogPost)
}
