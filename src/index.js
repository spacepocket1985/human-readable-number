module.exports = function toReadable (number) {
    const numbers = {

        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    let temp = String(number);
    let result = '';
    if (temp.length <= 2 || (temp.length <= 2 && temp[0] == 1)) { result = numbers[number] }

    if (temp.length == 2 && temp[0] != 1 && temp[1] != 0) { result = tens[temp[0]] + ' ' + numbers[temp[1]] }

    if (temp.length == 2 && temp[0] != 1 && temp[1] == 0) { result = tens[temp[0]] }

    if (temp.length == 3 && temp[1] == 0) { result = numbers[temp[0]] + ' ' + 'hundred' + ' ' + numbers[temp[2]] }

    if (temp.length ==3 && temp[1] == 0 && temp[2] == 0) { result = numbers[temp[0]] + ' ' + 'hundred' }

    if (temp.length == 3 && temp[1] == 1) { result = numbers[temp[0]] + ' ' + 'hundred' + ' ' + numbers[temp[1] + temp[2]] }

    if (temp.length == 3 && temp[1] > 1 && temp[2] == 0) { result = numbers[temp[0]] + ' ' + 'hundred' + ' ' + tens[temp[1]]}

    if (temp.length == 3 && temp[1] > 1 && temp[2] != 0) { result = numbers[temp[0]] + ' ' + 'hundred' + ' ' + tens[temp[1]]+ ' ' +numbers[temp[2]]}
    
    return result;
}
