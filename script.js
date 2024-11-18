        // Question:no:01:
        function dateTime() {
            let currentDateTime = new Date();
            let formattedDateTime = currentDateTime.toLocaleString();
            let result = document.createElement("div");
            result.innerHTML = `<h2> Current Date And Time </h2></br>${formattedDateTime}`;
            document.body.appendChild(result);
        }
        dateTime();

// Question:no:02:
function greetUser() {
    const firstName = prompt('Enter your first name:');
    const lastName = prompt('Enter your last name:');

    if (firstName?.trim() && lastName?.trim()) {
        alert(`Hello, ${firstName.trim()} ${lastName.trim()}! Welcome!`);
    } else {
        alert('Error: Please provide both first and last names.');
    }
}
greetUser();

// Question:no:03:
function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    return sum;
}
const result = addTwoNumbers();
alert("The sum of the two numbers is: " + result);

// Question:no:04:
function computeOperation(num1, num2, operator) {
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero";
        }
    } else {
        result = "Error: Invalid operator";
    }
    document.body.innerHTML = `<h2>Result: ${result}</h2>`;
    
    return result;
}
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter the operator (+, -, *, /):");
computeOperation(num1, num2, operator);

// Question:no:05:
function square(num) {
    return num * num;
}
const result2 = square(5);
document.write("<p>The square of the number is:</p>" + result2); 


// Question:no:06:
function factorial(num) {
    if (num < 0) {
        return "Error: Factorial of a negative number doesn't exist.";
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
const number = parseInt(prompt("Enter a number to compute its factorial:"));
const result3 = factorial(number);
alert(`The factorial of ${number} is: ${result3}`);

// Question:no:07:
function countNumbers(start, end) {
    let result = document.createElement("div");
    let countString = "<h2>Counting from " + start + " to " + end + ":</h2><p>";
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            countString += i + " ";
        }
    } else {
        countString = "<p>Error: Start number should be less than or equal to end number.</p>";
    }

    countString += "</p>";
    result.innerHTML = countString;
    document.body.appendChild(result);
}
const start = parseInt(prompt("Enter the start number:"));
const end = parseInt(prompt("Enter the end number:"));

countNumbers(start, end);

// Question:no:08:
const base = parseFloat(prompt("Enter the base of the triangle:"));
const perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

function calculateHypotenuse(base, perpendicular) {
    function square(num) {
        return num * num;
    }

    const hypoSqu = square(base)+ square(perpendicular);
    const hypo = Math.sqrt(hypoSqu);
    return  hypo;
}
const result5 = calculateHypotenuse(base, perpendicular);
alert(`The hypotenuse of the triangle is: ${result5}`);

// Question:no:09:
function calculateArea(width, height) {
    return width * height;
}

// Example i: Arguments as values
const area1 = calculateArea(5, 10);
document.write("<p>Area (using values): " + area1 + "</p>");

// Example ii: Arguments as variables
const width = 7;
const height = 12;
const area2 = calculateArea(width, height);
document.write("<p>Area (using variables): " + area2 + "</p>");

// Question:no:10:
const inputString = prompt("Enter a string to check if it's a palindrome:");
if (ispalindrome(inputString)) {
    document.write("<p>'" + inputString + "' is a palindrome!</p>");
} else {
    document.write("<p>'" + inputString + "' is not a palindrome.</p>");
}

function  ispalindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');

    if(cleanedStr === reversedStr){
        return true;
    }
    else{
        return false;
    }
}
// Question:no:11:
function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
}
const inputString2 = 'the quick brown fox';
const result6 = capitalizeFirstLetterOfEachWord(inputString2);
document.write("<p>Original String: " + inputString + "</p>");
document.write("<p>Modified String: " + result6 + "</p>");

// Question:no:12:
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
const inputString3 = 'Web Development Tutorial';
const result7 = findLongestWord(inputString);
document.write("<p>Original String: " + inputString3 + "</p>");
document.write("<p>Longest Word: " + result7 + "</p>");

// Question:no:13:
function countLetterOccurrences(str, letter) {
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

const inputString4 = 'JSResourceS.com';
const letter = 'o';
const result8 = countLetterOccurrences(inputString4, letter);
document.write("<p>Original String: " + inputString4 + "</p>");
document.write("<p>Letter to Count: " + letter + "</p>");
document.write("<p>Number of occurrences: " + result8 + "</p>");

// Question:no:14:
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius; 
    document.write("<p>The circumference is " + circumference.toFixed(2) + "</p>");
}
function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2); 
    document.write("<p>The area is " + area.toFixed(2) + "</p>");
}
const radius = 5; 
calcCircumference(radius);
calcArea(radius);
