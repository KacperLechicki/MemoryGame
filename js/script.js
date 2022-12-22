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
	console.log('nie ok');

	setTimeout(() => {
		cardOne.classList.add('shake');
		cardTwo.classList.add('shake');
	}, 400);

	setTimeout(() => {
		cardOne.classList.remove('flip');
		cardTwo.classList.remove('flip');
	}, 900);
};

cards.forEach((card) => {
	card.addEventListener('click', flipCard);
});
