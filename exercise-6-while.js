let original_index	= index 	= 2;
let limit 		= 20;
let direction 		= "asc";

console.log("LOOPING PERTAMA");
while(index <= limit && direction === "asc" || index >= limit && direction === "desc"){
	//console.log(`${index} - I love you from coding wkwkwk`);
	if(direction === "asc"){
		console.log(`${index} - I love coding`);

		// Jika loop dari $index ke $limit sudah selesai, tukar index dan limit untuk loop sebaliknya
		if(index === limit){
			console.log("LOOPING KEDUA");

			direction = "desc";
			index = limit;
			limit = original_index;
		}else{
			index += 2;		
		}
	}else{
		console.log(`${index} - I will become fullstack developer`);
		index -= 2;
	}

}
