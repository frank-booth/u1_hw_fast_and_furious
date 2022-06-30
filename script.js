let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
const mainTitle = document.getElementById('main-title')
mainTitle.innerText = "Dom's Home Page"
  // Part 2
document.body.style.backgroundColor = "blue";
  // Part 3
const favThings = document.getElementById('favorite-things').querySelectorAll('li');
favThings[5].remove()
  // Part 4
  // const special = document.getElementsByClassName('special-title')
  // for (let i=0;i<special.length;i++){
  //   special[i].style.fontSize = '2rem'
  // }
  
  const special = document.querySelectorAll('.special-title')
  special.forEach(fontchange => {
    fontchange.style.fontSize = '2rem'
  })

  // Part 5
const pastRaces = document.getElementById('past-races').querySelectorAll('li');
pastRaces[3].remove()
  // Part 6
const newRace = document.createElement('li')
newRace.innerText =' Seoul';
document.getElementById('past-races').appendChild(newRace)
  // Part 7
  const newBlog = document.createElement('div')
  newBlog.setAttribute('class','blog-post purple')
  document.querySelector('.main').appendChild(newBlog)
  const newH1 = document.createElement('h1')
  newH1.innerText = 'Seoul'
  newBlog.appendChild(newH1)
  const newP = document.createElement('p')
  newP.innerText = "I yelled out, 'Ahn nyung!' as I sped through Gang-nam!"
  newBlog.appendChild(newP)
}
