
// 
var total = 1000;
var bankroll = 1000;
var betAmount = 0;
var playercards = [];
var computercards = [];
// ====================================================

deck =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 ];

values =[11, 11, 11, 11, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];


facevalues = ["A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K"];

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



$('#bankroll').text(bankroll);
$('#bet-button').click(function(){
	betAmount = parseInt($("#bet-input").val());
	trackBankroll();
	startGame();
});
$('#stand').click(function(){
		while(getHandValue(computercards) < 17){
			compCard = Math.floor(Math.random() * deck.length);
			computercards.push(deck[compCard]);
			deck.splice(compCard, 1);
			$('#card' + computercards.length).text(facevalues[computercards[computercards.length - 1]]);
			if (isBust(computercards)){
				alert('Dealers busts!');
			}
		}
	});

var isBust = function(hand){
	if( getHandValue(hand) > 21){
		return true;
	}else{
		return false;
	}

}
// ================================================					

// To bet a certain amount and start the game
var startGame = function(){
	// deal cards function
	dealcomputer();
	dealplayer();
	hit();

	
}
    // });
// ==================================================

			// After cards are dealt option to hit buttons

var dealcomputer = function() {
	for (i = 0; i < 2; i++){
		computercards.push(deck[Math.floor(Math.random() * deck.length)]);
		$('#card' + (i + 1)).text(facevalues[computercards[i]]);
	}
}

// dealcomputer();

// ========================================================

var dealplayer = function() {
	for (i = 0; i < 2; i++) {
		playercards.push(deck[Math.floor(Math.random() * deck.length)]);
		$('#card' + (6 + i)).text(facevalues[playercards[i]]);
	}
}
// dealplayer();


// ==========================================================
					// hit to add another card
var hit = function() {
	$('#hit').click(function(){
	  	card  = Math.floor(Math.random() * deck.length);
	  	playercards.push(deck[card]);
		deck.splice(card,1);
		$('#card' + (5 + playercards.length)).text(facevalues[playercards[playercards.length - 1]]);
		alert(getHandValue(playercards));

			if (isBust(playercards)){
				alert('Bust!');
			}

		
	})
};


// ==============================================
					// bankroll


var trackBankroll = function(){
	 bankroll -= betAmount;
	 $('#bankroll').text(bankroll);
}
trackBankroll();



// var didPlayerWin = function() {
// 	for (int i = 0; i < playercards.length; i++){
// 		value = values[playercards[i]];
// 		suit = suits[playercard[i]];
// 	}
// }

var getHandValue = function(hand){
	var sum = 0;
	// looping through a players hand to get the sum of values
	for( i = 0; i < hand.length; i++){
		sum = sum + values[hand[i]];
	}
	return sum;

};

















