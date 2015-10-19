
var total = 1000;
var bankroll = 1000;
var betAmount = 0;
var playercards = [];
var computercards = [];
var playercardsvalue = 0;
var computercardsvalue= 0;
// ====================================================

deck =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ];

values =[11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];



numericals = [];

suit = ["hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades", "hearts", "diamonds", "clubs", "spades"]
// ======================================================
				// To get full deck of cards with suit
// var deckarray = function() {
// 	for (i = 0; i < numericals.length; i++) {
// 		deck.push((numericals[i]) + suit[0]);
// 		deck.push((numericals[i]) + suit[1]);
// 		deck.push((numericals[i]) + suit[2]);
// 		deck.push((numericals[i]) + suit[3]);
// 	}
// }
// deckarray();



var win
// ================================================					

		// To bet a certain amount and start the game
var startGame = function(){
	$('#bet-button').one("click", function(){
	betAmount = parseInt($("#bet-input").val());
	// deal cards function
	dealcomputer();

	dealplayer();
	hit();


});
}
startGame();
    // });
// ==================================================

			// After cards are dealt option to hit buttons

var dealcomputer = function() {
	for (i = 0; i < 2; i++){
	computercards.push(deck[Math.floor(Math.random() * deck.length)]);
}
}

// dealcomputer();

// ========================================================

var dealplayer = function() {
	for (i = 0; i < 2; i++) {

		playercards.push(deck[Math.floor(Math.random() * deck.length)]);
	}
}
// dealplayer();


// ==========================================================
					// hit to add another card
var hit = function() {
	$('#hit').click(function(){
		playercards.push(deck[Math.floor(Math.random() * deck.length)]);
	})
};


// ==============================================
					// bankroll


var trackBankroll = function(){
	 total = bankroll - betAmount;
	 $('#bankroll').html(total)

	

}
trackBankroll();
















