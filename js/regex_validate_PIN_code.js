/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
// Methode 1:
// if (pin.split("").map((el) => +el).includes(NaN) || pin.includes(' ')) return false;
// return pin.length === 4 || pin.length === 6 ? true : false;

// Methode 2:
// if(pin.length != 4 && pin.length != 6) return false;
// for(let i = 0; i < pin.length; i++) {
//     if(pin[i] > "9" || pin[i] < "0") return false;
// }
// return true;

// Methode 3:
return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("00000"));