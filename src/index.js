module.exports = function toReadable(number) {
    const numberObj = {
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
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let tens = number % 100;
    let hundreds = Math.trunc(number / 100);
    let units = number % 10;

    if (number < 21) {
        return numberObj[number];
    }

    if (number > 20 && number < 100) {
        if (units === 0) {
            return numberObj[number];
        } else {
            return numberObj[number - units] + " " + numberObj[units];
        }
    }

    if (number > 99) {
        if (tens === 0 && units === 0) {
            return numberObj[hundreds] + " hundred";
        }
        if (tens < 21) {
            return numberObj[hundreds] + " hundred " + numberObj[tens];
        } else if (units === 0) {
            return numberObj[hundreds] + " hundred " + numberObj[tens];
        } else {
            return (
                numberObj[hundreds] +
                " hundred " +
                numberObj[tens - units] +
                " " +
                numberObj[units]
            );
        }
    }
};
