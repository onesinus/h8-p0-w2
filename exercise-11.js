function balikKata(kata) {
	// you can only write your code here!
	let kataTerbalik = "";
	for(let i = kata.length; i > 0; i--){
		kataTerbalik += kata[i-1];
	}
	return kataTerbalik;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
