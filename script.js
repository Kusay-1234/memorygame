const cards = document.querySelectorAll(".card");
let flippedCards = [];
let matchCards = 0;

function shuffleCards(){
  const order = Array.from(Array(cards.length).keys());
  order.sort(() => Math.random() - 0.5);

  cards.forEach((card, index) => {
    card.style.order = order[index];
  });
}

function flipCards(){
  if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')){
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2){
      checkMatch();
    }
  }
}

function checkMatch(){
  const [firstCard, secondCard] = flippedCards;
  if(firstCard.dataset.card === secondCard.dataset.card){
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchCards += 2;
    resetFlippedCards();

    if (matchCards === cards.length){
      setTimeout(() => alert('You Win!'), 500);
    }

  } else{
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetFlippedCards();
      }, 1000);
    }
  }



function resetFlippedCards(){
  flippedCards = [];
}

  cards.forEach(card => {
    card.addEventListener('click', flipCards);
  });

  shuffleCards();

