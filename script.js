document.getElementById('multiplyBtn').addEventListener('click', function() {
    const numberElement = document.getElementById('number');
    const currentNumber = parseInt(numberElement.textContent);
    const newNumber = currentNumber * 5;
    numberElement.textContent = newNumber;
});
