var jmlangkot = 10;
var angkotberoperasi = 6;

for(var noangkot = 1; noangkot <= jmlangkot; noangkot++){
	if(noangkot <= angkotberoperasi){
		console.log("Angkot No. ", noangkot, " sedang beroperasi dengan baik.");
	}else if(noangkot == 8){
		console.log("Angkot No. ", noangkot, " sedang lembur.");
	}
	else{
		console.log("Angkot No. ", noangkot, " sedang tidak beroperasi.");
	}
}
