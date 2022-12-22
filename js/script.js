'use strict';

const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;
let disabled = false;

const flipCard = (e) => {
	let clickedCard = e.target;
	clickedCard.classList.add('flip');

	if (!cardOne && !disabled) {
		return (cardOne = clickedCard);
	}
	cardTwo = clickedCard;
    disabled = true;

	let cardOneImg = cardOne.querySelector('img').src,
		cardTwoImg = cardTwo.querySelector('img').src;

	matchingCards(cardOneImg, cardTwoImg);
};

const matchingCards = (cardOneImg, cardTwoImg) => {
	if (cardOneImg === cardTwoImg) {
		cardOne.removeEventListener('click', flipCard);
		cardTwo.removeEventListener('click', flipCard);
		cardOne = cardTwo = '';
		return disabled = true;
	}

	setTimeout(() => {
		cardOne.classList.add('shake');
		cardTwo.classList.add('shake');
	}, 400);

	setTimeout(() => {
		cardOne.classList.remove('flip');
		cardTwo.classList.remove('flip');
		cardOne = cardTwo = '';
        disabled = false;
	}, 1000);
};

cards.forEach((card) => {
	card.addEventListener('click', flipCard);
});
