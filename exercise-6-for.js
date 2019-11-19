let start 	= 1;
let end 	= 20;
let status_loop = "pertamax";

console.log("LOOPING PERTAMA");
for(i = start; i <= end && status_loop === "pertamax" || i >= end && status_loop === "keduax";){
	if(status_loop === "pertamax"){
		console.log(`${i} - I love coding`);	
		if(i === 20 && status_loop === "pertamax"){
			console.log("LOOPING KEDUA");

			status_loop = "keduax";
			i = end;
			end = start;
		}else{
			i++;
		}
	}else{
		console.log(`${i} - I will become fullstack developer`);
		i--;
	}
}
