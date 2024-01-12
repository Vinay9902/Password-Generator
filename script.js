const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()-_=+<>/[]{}"

const allChars = upperCase+lowerCase+numbers+ symbol;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += numbers[Math.floor(Math.random() * numbers.length)];

    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
   passwordBox.value= password;
//    document.getElementById("passwordBox").innerHTML = password;
}

function copyPassword(){
    let text_to_copy = document.getElementById("copy").innerText;
    navigator.clipboard.writeText(text_to_copy);
    
}
