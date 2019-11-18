let jumlah_pakaian = 20;
let jumlah_baju_masuk = 0;
while(jumlah_baju_masuk < jumlah_pakaian){
	jumlah_baju_masuk += 1;
	console.log(jumlah_baju_masuk, "Baju sudah masuk mesin");

}

if(jumlah_baju_masuk === jumlah_pakaian){
	console.log("Mesin siap dinyalakan");
}else{
	console.log("Belum semua baju masuk Mr. Foxie");
}
