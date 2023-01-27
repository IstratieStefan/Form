var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');

i1.onclick = function(e){
    i1.innerHTML = "DA";
    i2.innerHTML = "NU";
}

i2.onclick = function(e){
    i2.innerHTML = "DA";
    i1.innerHTML = "NU";
}