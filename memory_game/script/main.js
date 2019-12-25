// console.log('works')

let arrCards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    },
]

//console.log(arrCards);

let arrCardsInPlay = [];
let doms = {
    btn: document.querySelector('.btn'),
    win: document.querySelector('.win'),
    loss: document.querySelector('.loss'),
    score: document.querySelector('.score')
}
doms.btn.addEventListener('click', init);



let score = 0;

function checkForMatch() {
    if (arrCardsInPlay.length == 2) {
        if (arrCardsInPlay[0] === arrCardsInPlay[1]) {
            doms.win.classList = 'winning';
            score += 1;
            doms.score.textContent = score;
        } else {
            doms.loss.classList = 'lossing';

        }
    }
}


function flipCard() {
    cardID = this.getAttribute('data-');
    // console.log(cardID);
    //console.log(this);
    this.setAttribute('src', arrCards[cardID].cardImage);
    // console.log(arrCards[cardID].rank)
    arrCardsInPlay.push(arrCards[cardID].rank);
    // calling check match function
    checkForMatch();

}







function createBoard() {

    let cardElement, gameBoard;

    for (let i = 0; i < arrCards.length; i++) {
        cardElement = document.createElement('img');
        //set the imag att
        cardElement.setAttribute('src', "images/back.png");
        // set the data att
        cardElement.setAttribute(`data-`, i);
        //declear the block
        gameBoard = document.getElementById('game-board')
            //assing ele to the block
        gameBoard.appendChild(cardElement);
        //add event to the ele
        cardElement.addEventListener('click', flipCard);
    }

}
createBoard();



let setBackImgs = {
    imgsEle: [
        document.getElementsByTagName('img')[0],
        document.getElementsByTagName('img')[1],
        document.getElementsByTagName('img')[2],
        document.getElementsByTagName('img')[3]
    ],
    flipBackImg: function() {
        for (i = 0; i < this.imgsEle.length; i++) {
            let img = this.imgsEle[i];
            img.setAttribute('src', "images/back.png");
        }
    }
}




function init() {
    setBackImgs.flipBackImg();
    arrCardsInPlay = [];
    checkForMatch();
    doms.win.classList = 'win';
    doms.loss.classList = 'loss';


}
init();













// if (arrCardsInPlay[cardId] === arrCardsInPlay[cardId]) {
//     console.log('there is a match')
// } else {
//     console.log('not right');
// }


console.log(arrCardsInPlay)