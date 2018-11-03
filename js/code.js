function onClick() {
    var username = document.getElementById("username").value;
    var hasil = ""
    
    if(!isNaN(username.substring(0,5))) {
        if(hasil != "") { hasil += "<br/>"; }
        hasil += "*lima karakter pertama haruslah huruf";
    }
    if(username.substring(5,6) !== "_") {
        if(hasil != "") { hasil += "<br/>"; }
        hasil += "*karakter keenam wajib <em>underscore</em>";
    }
    if (isNaN(username.substring(6,8))) {
        if(hasil != "") { hasil += "<br/>"; }
        hasil += "*dua karakter terakhir haruslah angka";
    }
    
    document.getElementById("result").innerHTML = hasil;
}

document.getElementById("check").addEventListener('click', onClick);