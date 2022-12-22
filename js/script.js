'use strict';

const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;

const flipCard = (e) => {
	let clickedCard = e.target;
	clickedCard.classList.add('flip');

	if (!cardOne) {
		return (cardOne = clickedCard);
	}
	cardTwo = clickedCard;

	let cardOneImg = cardOne.querySelector('img').src,
		cardTwoImg = cardTwo.querySelector('img').src;

	matchingCards(cardOneImg, cardTwoImg);
};

const matchingCards = (cardOneImg, cardTwoImg) => {
	if (cardOneImg === cardTwoImg) {
		return console.log('ok');
	}
	return console.log('nie ok');
};

cards.forEach((card) => {
	card.addEventListener('click', flipCard);
});
