// menanhkap pilihan player

var tanya = true;
while(tanya){
	var p = prompt("pilih : gajah, semut, atau orang?");
	// menanhkap pilihan vomputer
	// membangkitkan bil ranfom
	var comp = Math.random();

	if(comp < 0.34){
		comp = "gajah";
	} else if(comp => 0.34 && comp < 0.67){
		comp = "orang";
	} else{
		comp = "semut";
	}

	var hasil = '';
	// menentukan rules
	if(p == comp){
		hasil = "SERI";
	} else if(p == 'gajah'){
		hasil = (comp == "orang") ? "Menang" : "kalah";
	} else if(p == 'orang'){
		hasil = (comp == "gajah") ? "kalah" : "Menang";
	} else if(p == 'semut'){
		hasil = (comp == "orang") ? "kalah" : "Menang";
	} else{
		hasil = "memasukan pilihan yang salah";
	}

	//tampilkan hasilnya

	alert("kamu memilihh : " + p + " dan komputer memilih: "+ comp + "\nhasilnya: "+ hasil);
	tanya = confirm("lagi?")
}