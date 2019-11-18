let data_murid = [{nama: "bejo", kuku: "panjang"}, {nama: "mali", kuku: "pendek"}, {nama: "lexiong", kuku: "pendek"}]
let urutan_cek_murid = 0
let jumlah_murid = 40

while(urutan_cek_murid < data_murid.length){
	if(data_murid[urutan_cek_murid].kuku === "panjang"){
		console.log(data_murid[urutan_cek_murid].nama, " Kuku kamu panjang ya...!!! sini jari kamu *cetok* ")
	}else{
		console.log(data_murid[urutan_cek_murid].nama, " Bagus nak, lanjutkan karyamu... ")
	}
	urutan_cek_murid++
}
