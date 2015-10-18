
var bankroll = 1000;
var betAmount = 0;
var playercards = [];
var computercards = [];
var playercardsvalue = 0;
var computercardsvalue= 0;
// ====================================================

deck =["Ahearts", "Adiamonds", "Aclubs", "Aspades", "2hearts", "2diamonds", "2clubs", "2spades", "3hearts", "3diamonds", "3clubs", "3spades", "4hearts", "4diamonds", "4clubs", "4spades", "5hearts", "5diamonds", "5clubs", "5spades", "6hearts", "6diamonds", "6clubs", "6spades", "7hearts", "7diamonds", "7clubs", "7spades", "8hearts", "8diamonds", "8clubs", "8spades", "9hearts", "9diamonds", "9clubs", "9spades", "10hearts", "10diamonds", "10clubs", "10spades", "Jhearts", "Jdiamonds", "Jclubs", "Jspades", "Qhearts", "Qdiamonds", "Qclubs", "Qspades", "Khearts", "Kdiamonds", "Kclubs", "Kspades"];

values =[11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];



numericals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

suit = ['hearts', 'diamonds', 'clubs', 'spades']
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


// ================================================					

		// To bet a certain amount and start the game
var startGame = function(){
	$('#bet-button').one("click", function(){
	betAmount = parseInt($("#bet-input").val());
	// deal cards function
	dealcomputer();

	dealplayer();
	



});
}
startGame();
    // });
// ==================================================

			// After cards are dealt option to hit buttons

var dealcomputer = function() {
	for (i = 0; i < 2; i++){
	computercards.push(deck[Math.floor(Math.random() * deck.length)]);
	// computercards.push() = deck[Math.floor(Math.random() * deck.length)];
}
}

// dealcomputer();

// ========================================================

var dealplayer = function() {
	for (i = 0; i < 2; i++) {
		playercards.pop(deck[Math.floor(Math.random() * deck.length)]);
	}
}
// dealplayer();


// ==========================================================

var hit = function() {
	$('#hit').click(function(){
		$('#player-cards').append("<div></div>");


		

	
	})
};

hit();


















