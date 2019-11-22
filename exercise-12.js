function konversiMenit(menit) {
	// you can only write your code here!
	let menitOnly	= menit % 60;
	let jamOnly 	= (menit - menitOnly) / 60;

	// Membuat jadi 2 digit (didepannya ada 0) jika hanya 1 digit
	menitFormat 		= menitOnly.toString().length === 1?"0"+menitOnly:menitOnly; 

	return `${jamOnly}:${menitFormat}`;	
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
