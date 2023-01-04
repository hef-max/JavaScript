// function tambah(a, b) {
// 	return a + b;
// }


// var a = parseInt(prompt("masukan nilai a: "));
// var b = parseInt(prompt("masukan nilai b: "));

// var hasil = tambah(a, b);
// console.log(hasil);

function tambah() {
	var hasil = 0;
	for(var i = 0; i < arguments.length; i++){
		hasil += arguments[i];
	}
	return hasil;
}

var coba  = tambah(1, 2, 3, 4, 5);
console.log(coba);