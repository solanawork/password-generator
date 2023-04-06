const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let shortPassword = document.getElementById("password-short")
setPasswortLength = [16, 32]

let longPassword = document.getElementById("password-long")

function generatePwd() {

shortPassword.textContent = ""
for (let i = 0; i < setPasswortLength[0]; i++) {
    getRandomChar()
    }
    
longPassword.textContent = ""
for (let i = 0; i < setPasswortLength[1]; i++) {
    getRandomChar2()
    }
}
//function to get random character from the characters array
function getRandomChar() {
let randomChar = Math.floor(Math.random() * characters.length)
shortPassword.textContent += characters[randomChar]

}

function getRandomChar2() {
let randomChar = Math.floor(Math.random() * characters.length)
longPassword.textContent += characters[randomChar]

}