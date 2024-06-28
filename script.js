// Function to convert Arabic number to Roman numeral
function convertToRoman(num) {
  const romanValues = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let romanNumeral = '';
  for (let i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i].value) {
      romanNumeral += romanValues[i].numeral;
      num -= romanValues[i].value;
    }
  }
  return romanNumeral;
}

document.getElementById('convert-btn').addEventListener('click', () => {
  const numberInput = document.getElementById('number').value.trim();
  const outputElement = document.getElementById('output');

  // Validate input
  if (numberInput === '') {
    outputElement.textContent = 'Please enter a valid number';
    return;
  }

  const number = parseInt(numberInput, 10);

  if (Number.isNaN(number) || number < 1) {
    outputElement.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (number >= 4000) {
    outputElement.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }

  // Convert number to Roman numeral
  const romanNumeral = convertToRoman(number);
  outputElement.textContent = romanNumeral;
});
