const card = document.querySelectorAll('.card');
const front = document.querySelectorAll('.front');
const container = document.querySelectorAll('.container');
const score = document.querySelectorAll('.score span');

sfleIufmage()
click()
function sfleIufmage() {

    card.forEach(c => {

        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random() * card.length);

        c.style.order = num[random];
    })
}


function click() {
    for (let i = 0; i < card.length; i++) {

        // front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 1000);

        card[i].addEventListener('click', () => {
            front[i].classList.add('flip');
            const flipCard = document.querySelectorAll('.flip')

            if (flipCard.length == 2) {
                match(flipCard[0], flipCard[1])
            }
        })
    }
}


function match(cardOne, cardTwo) {
    if (cardOne.dataset.index == cardTwo.dataset.index) {

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('match');
        cardTwo.classList.add('match');

    } else {

        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        }, 500);
    }
}