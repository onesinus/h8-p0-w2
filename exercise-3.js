var nama = 'Zero';
var peran = 'Penyihir';

if(!nama){
	console.log("Nama harus diisi!");
}else if(nama && !peran){
	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}else if(nama && peran){
	console.log(`Selamat datang diDunia Proxytia, ${nama}`);
	let pesanPeran = `Halo ${peran} ${nama} `;
	if(peran === 'Ksatria'){
		pesanPeran += "kamu dapat menyerang dengan senjatamu!";
	}else if(peran === 'Tabib'){
		pesanPeran += "akan membantu temanmu yang terluka.";
	}else{
		pesanPeran += "ciptakan keajaiban yang membantu kemenanganmu!";
	}
	console.log(pesanPeran);
}
