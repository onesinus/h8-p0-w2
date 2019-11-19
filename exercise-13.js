function xo(str) {
	// you can only write your code here!
	let jumlahX = jumlahO = 0;
	
	for(let i = 0; i < str.length; i++){
		str[i] === "x"?jumlahX++:jumlahO++;
	}	

	return jumlahX === jumlahO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
