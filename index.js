const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genEl = document.getElementById("gen-el")
let boxs = document.getElementById("box")

genEl.addEventListener("click", function(){
    boxs.textContent = ""
    for (let i = 0; i < 12; i++){
        let x = Math.floor(Math.random()* characters.length);
        boxs.textContent += characters[x];
    }
})