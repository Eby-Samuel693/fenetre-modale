let clickMe = document.getElementById('clickMe');
let modale = document.getElementById('modale');
let div2 = document.getElementById('div2');
let para = document.getElementById('para');
let yes = document.getElementById('yes');
let no = document.getElementById('no');

function apparait() {
    clickMe.style.display = "none";
    modale.style.display = "block";
}

function aprouve() {
    modale.style.display = "none";
    clickMe.style.display = "block";
}

function refu(){
    div2.style.display = "none";
    modale.style.backgroundColor= "red";
    para.innerHTML = "vous avez moins de 18 ans !!!"
    document.body.style.backgroundColor = "grey";
}

clickMe.addEventListener('click',apparait);
yes.addEventListener('click',aprouve);
no.addEventListener('click',refu);