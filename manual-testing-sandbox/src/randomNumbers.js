function generateRandomNumbers(count) {
    const numbers = new Set();

    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}

function createArray(n) {
    const array = [];

    // ... לולאת for או while להוספת מספרים ל-array ...

    return array;
}

// דוגמה לשימוש בפונקציה
const resultArray = createArray(10);
console.log(resultArray);