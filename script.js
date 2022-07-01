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
document.getElementById('main-title').innerText = "Welcome to DOM's homepage!"
  // Part 2
document.body.style.backgroundColor = 'blue';
  // Part 3
document.querySelectorAll('li')[5].remove()
  // Part 4
document.querySelector('.special-title').style.fontSize = '3rem';
//  Part 5
const removePastRaces = document.getElementById('past-races');
removePastRaces.removeChild(removePastRaces.children[3])
  // Part 6
  let newCity = document.createElement('li');
  newCity.textContent = 'Seattle';
  newList = document.getElementById('past-races');
  newList.appendChild(newCity)

  // Part 7
  let main = document.querySelector('.main');
  let addDiv = document.createElement('div');
  addDiv.classList.add('blog-post', 'purple');
  main.appendChild(addDiv);
  let addH1 = document.createElement('h1');
  addDiv.appendChild(addH1);
  addH1.innerText = 'Seatle'
  let addP = document.createElement('p');
  addDiv.appendChild(addP)
  addP.innerText = 'I DROVE TO SEATLE!'

}
