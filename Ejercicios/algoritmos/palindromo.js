function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(str);
    console.log(newString);

    var isAnagram = (newString.toLowerCase() === str.toLowerCase());

    console.log(isAnagram);
    return newString;

}
reverseString('Reconocer');