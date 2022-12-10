


const cards = document.querySelectorAll(".memory-card");

let count = 6;

let win = 0;

let hasFlippedCard = false;

let lockBoard = false;

let firstCard, secondCard;





function Match() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;



    if (isMatch === true) {
    
        win++;
    
        disableCards();
    
    }
    
    else {
    
        count--;
    
        unflipCards();
    
    }
}




function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false];

    [firstCard, secondCard] = [null, null];

}





function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove("flip");

        secondCard.classList.remove("flip");


        
        resetBoard();
    }, 500);

}









function disableCards() {

    firstCard.removeEventListener("click", flipCard);

    secondCard.removeEventListener("click", flipCard);


    
    resetBoard();
}






function flipCard() {

    if (lockBoard) return;

    if (this === firstCard) return;


    
    this.classList.add("flip");


    
    if (!hasFlippedCard) {
    
        hasFlippedCard = true;
    
        firstCard = this;
    
        return;
    
    }


    
    secondCard = this;
    

    
    Match();


    
    if (count === 0) {
    
        window.alert('Game Over');
        location.reload();
    
    }
    
    if (win === 6) {
    
        window.alert('Game Over Bacha! Ab toh Khatam Ghar JAo ab!');
    
        location.reload();
    
    }
    
    // count--;
    
    // console.log(count);
    
    // document.getElementById("demo").innerHTML = "Try's Remaining:" + count;
    
    document.getElementById("demo").innerHTML = "Try's Remaining:" + count;
}









(function shuffle() {

    cards.forEach((card) => {

        let randomPos = Math.floor(Math.random() * 12);

        card.style.order = randomPos;

    });
})();



cards.forEach((card) => card.addEventListener("click", flipCard));





