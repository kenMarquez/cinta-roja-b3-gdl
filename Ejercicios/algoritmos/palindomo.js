let inputStr = prompt("Escribe tu mensaje");

inputStr = inputStr.toUpperCase();
inputStr = inputStr.replace(/\s+/g,"");

for(let char in inputStr){
    if(inputStr[char] === inputStr[inputStr.length - 1 - char]){
        console.log("Palindromo");
    } else {
        console.log("No palindromo");
    }
    
}

