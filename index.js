// You are given an array representing the daily average temperatures (in Celsius) of a month.
const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];


// Part 1: Temperature Analysis
// Task 1 Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
// Output 1 [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]

temperaturesFilteredArray1 = temperatures.filter(temperature => temperature >= 25);
console.log(temperaturesFilteredArray1);

// Task 2 Create a new array containing temperatures less than 20 degrees Celsius.
// Output 2 [19, 18, 19, 19]

temperaturesFilteredArray2 = temperatures.filter(temperature => temperature < 20)
console.log(temperaturesFilteredArray2);

// Part 2: Temperature Transformation
// Task 3 Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
// Output 3 [ 71.6, 77, 66.2, 75.2,82.4, 86, 69.8, 68, 80.6, 84.2, 73.4, 78.8, 75.2, 71.6, 64.4, 66.2, 69.8, 82.4, 86, 80.6, 78.8, 77, 71.6, 73.4,66.2, 68, 82.4, 84.2, 80.6, 78.8 ]

temperaturesConvertedToFahrenheit = temperatures.map(temperature => (temperature * 9/5) + 32);
console.log(temperaturesConvertedToFahrenheit);

// Task 4 Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
// Output 4 ['Mild', 'Warm', 'Cool', 'Mild','Warm', 'Warm', 'Mild', 'Mild','Warm', 'Warm', 'Mild', 'Warm','Mild', 'Mild', 'Cool', 'Cool','Mild', 'Warm', 'Warm', 'Warm','Warm', 'Warm', 'Mild', 'Mild','Cool', 'Mild', 'Warm', 'Warm','Warm', 'Warm']

const temperaturesState = temperatures.map(temperature => {
    if (temperature >= 25) return temperature = "Warm";
    else if (temperature >= 20 && temperature <= 24) return temperature = "Mild";
    else if (temperature < 20) return temperature = "Cool";
    });

console.log(temperaturesState);

// Part 3: Summary Statistics
// Task 5 Calculate and return the highest temperature of the month.       Output 5 30

const highestTemperature = temperatures.reduce( (highest , temperature) => {
    return (temperature > highest) ? temperature : highest;
})

console.log(highestTemperature);

// Task 6 Calculate and return the lowest temperature of the month.        Output 6 18


const lowestTemperature = temperatures.reduce( (lowest , temperature) => {
    return (temperature < lowest) ? temperature : lowest;
})

console.log(lowestTemperature);