// DICE ROLLER PROGRAM 


function rolldice(){

const numofdice = document.getElementById("numofdice").value;
const diceresult =  document.getElementById("diceresult");
const diceimages = document.getElementById("diceimages");
const values = [];
const images  = [];

for (let  i  =  0; i <  numofdice; i++) {
    const value = Math.floor(Math.random() * 6 ) + 1 ;
     values.push(value);
     images.push(`<img src="dice/${value}.png">`);
}

diceresult.textContent = ` Dice : ${values.join(',')}`;
diceimages.innerHTML =  images.join('  ');


}