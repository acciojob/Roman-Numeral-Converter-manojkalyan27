function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        I: 1
    };

    let result = "";
    for (let symbol in romanNumerals) {
        let value = romanNumerals[symbol];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test the function with the input 360
console.log(convertToRoman(360));

// Do not edit below this line
module.exports = convertToRoman;
