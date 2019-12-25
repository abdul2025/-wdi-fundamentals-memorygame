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




let score = 0;

function checkForMatch() {
    if (arrCardsInPlay.length == 2) {
        if (arrCardsInPlay[0] == arrCardsInPlay[1]) {
            //add class
            doms.win.classList = 'winning';
            //add score
            score += 1;
            //show the score
            doms.score.textContent = score;
        } else {
            doms.loss.classList = 'lossing';
        }
    } else if (arrCardsInPlay.length == 4) {
        if (arrCardsInPlay[2] == arrCardsInPlay[3]) {
            doms.win.classList = 'twice';
            score += 1;
            doms.score.textContent = score;
        } else {
            doms.loss.classList = 'twice';
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
        //set the src att
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

function setBackImgs() {

    //convert nodelist to arr 
    let imgsArr = [...document.querySelectorAll('img')];
    // console.log(imgsArr);
    //loop over img arr and set the src att
    imgsArr.forEach((img) => {
        img.setAttribute('src', "images/back.png")
    })
}



function init() {
    setBackImgs();
    arrCardsInPlay = [];
    checkForMatch();
    doms.win.classList = 'win';
    doms.loss.classList = 'loss';
}

// event for rest btn
doms.btn.addEventListener('click', init);
init();




console.log(arrCardsInPlay)