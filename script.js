document.getElementById('convert-btn').addEventListener('click', function handleClick() {
  // Get the value from input
  const numberInput = document.getElementById('number').value.trim();

  // Convert the input to a number
  const number = parseInt(numberInput, 10); // Added radix parameter

  // Validate the number and generate Roman numeral accordingly
  if (Number.isNaN(number)) {
    document.getElementById('output').textContent = 'Please enter a valid number';
  } else if (number < 1) {
    document.getElementById('output').textContent = 'Please enter a number greater than or equal to 1';
  } else if (number >= 4000) {
    document.getElementById('output').textContent = 'Please enter a number less than 4000';
  } else {
    // Convert number to Roman numeral
    document.getElementById('output').textContent = convertToRoman(number);
  }
});

// Function to convert number to Roman numeral
function convertToRoman(num) {
  const romanNumeralsMap = [
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
    { value: 1, numeral: 'I' }
  ];

  let romanNumeral = '';

  for (let i = 0; i < romanNumeralsMap.length; i++) {
    while (num >= romanNumeralsMap[i].value) {
      romanNumeral += romanNumeralsMap[i].numeral;
      num -= romanNumeralsMap[i].value;
    }
  }

  return romanNumeral;
}
