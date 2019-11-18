function isKabisat(tahun){
	let response_msg_kabisat = "Tahun  ini adalah tahun kabisat"
	let response_msg_non_kabisat = "Tahun ini bukan tahun kabisat"

	if(tahun % 4 === 0){
		if(tahun % 100 !== 0){
			console.log(tahun, response_msg_kabisat)
		}else if(tahun % 100 === 0 && tahun % 400 === 0){
			console.log(tahun, response_msg_kabisat)
		}else{
			console.log(tahun, response_msg_non_kabisat)
		}
	}else{
		console.log(tahun, response_msg_non_kabisat)
	}
}

for(let i = 1600; i <= 2020; i++){
	isKabisat(i);	
}

