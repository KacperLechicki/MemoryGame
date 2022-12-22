'use strict';

const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;
let disabled = false;
let matchedCards = 0;

const flipCard = (e) => {
	let clickedCard = e.target;
	if (clickedCard !== cardOne && !disabled) {
		clickedCard.classList.add('flip');

		if (!cardOne) {
			return (cardOne = clickedCard);
		}
		cardTwo = clickedCard;
		disabled = true;

		let cardOneImg = cardOne.querySelector('img').src,
			cardTwoImg = cardTwo.querySelector('img').src;

		matchingCards(cardOneImg, cardTwoImg);
	}
};

const matchingCards = (cardOneImg, cardTwoImg) => {
	if (cardOneImg === cardTwoImg) {
		matchedCards++;

		if (matchedCards == 8) {
			setTimeout(() => {
				return shuffleCard();
			}, 1000);
		}

		cardOne.removeEventListener('click', flipCard);
		cardTwo.removeEventListener('click', flipCard);
		cardOne = cardTwo = '';
		return (disabled = false);
	}

	setTimeout(() => {
		cardOne.classList.add('shake');
		cardTwo.classList.add('shake');
	}, 400);

	setTimeout(() => {
		cardOne.classList.remove('flip', 'shake');
		cardTwo.classList.remove('flip', 'shake');
		cardOne = cardTwo = '';
		disabled = false;
	}, 1000);
};

const shuffleCard = () => {
	matchedCards = 0;
	cardOne = cardTwo = '';
	disabled = false;

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
	arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

	cards.forEach((card, index) => {
		card.classList.remove('flip');
		let imgTag = card.querySelector('img');
		imgTag.src = `./img/diamond${arr[index]}.png`;
		card.addEventListener('click', flipCard);
	});
};

shuffleCard();

cards.forEach((card) => {
	card.addEventListener('click', flipCard);
});
