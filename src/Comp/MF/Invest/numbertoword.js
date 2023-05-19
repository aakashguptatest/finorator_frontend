import React from "react";

const NumberToWord = ({ amount }) => {
  const numberToWord = (number) => {
    // Define word representations for numbers up to 19
    const ones = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];

    // Define word representations for tens from 20 to 90
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    // Define word representations for thousands, millions, billions, and trillions
    const suffixes = ["", "Thousand", "Million", "Billion", "Trillion"];

    // Handle special cases for zero and negative numbers
    if (number === 0) {
      return "Zero";
    } else if (number < 0) {
      return `Negative ${numberToWord(Math.abs(number))}`;
    }

    let word = "";

    // Iterate through each suffix (thousands, millions, billions, etc.)
    for (let i = 0; number > 0; i++) {
      if (number % 1000 !== 0) {
        // Get the last three digits of the number
        const currentThreeDigits = number % 1000;

        // Convert the last three digits to words
        let currentWord = "";

        if (currentThreeDigits >= 100) {
          // Convert the hundreds place to words
          currentWord += `${
            ones[Math.floor(currentThreeDigits / 100)]
          } Hundred `;
          currentThreeDigits %= 100;
        }

        if (currentThreeDigits >= 20) {
          // Convert the tens place to words
          currentWord += `${tens[Math.floor(currentThreeDigits / 10)]} `;
          currentThreeDigits %= 10;
        }

        if (currentThreeDigits > 0) {
          // Convert the ones place to words
          currentWord += `${ones[currentThreeDigits]} `;
        }

        // Add the current word and its suffix
        word = `${currentWord.trim()} ${suffixes[i]} ${word}`;
      }

      // Remove the last three digits from the number
      number = Math.floor(number / 1000);
    }

    return word.trim();
  };

  const word = numberToWord(amount);

  return (
    <div>
      <div>{word} Rupees</div>
    </div>
  );
};

export default NumberToWord;
