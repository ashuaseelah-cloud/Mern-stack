// ===============================
// Section 1 — Variables & Assignment
// ===============================

// 1 & 2
let name = "Kiruthiga";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 3. Swap without third variable
let a = 5;
let b = 10;

console.log("Before Swap:", a, b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap:", a, b);

// 4. Output prediction
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10 (because y is a copy, not reference)

// 5. Using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);


// ===============================
// Section 2 — Operators
// ===============================

let num1 = 20;
let num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7. Predict output
console.log(5 + "5");     // "55" (string concatenation)
console.log(5 - "2");     // 3 (string converted to number)
console.log(true + 1);    // 2 (true = 1)

// 8. Compare with 100
let number = 100;

if (number > 100) {
    console.log("Greater than 100");
} else if (number === 100) {
    console.log("Equal to 100");
} else {
    console.log("Less than 100");
}

// 9. == vs ===
console.log(5 == "5");   // true (type conversion)
console.log(5 === "5");  // false (strict comparison)

// 10. Age eligibility
let checkAge = 25;

if (checkAge >= 18 && checkAge <= 60) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ===============================
// Section 3 — Control Statements
// ===============================

// 11. Even or Odd
let checkNumber = 7;

if (checkNumber % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 12. FizzBuzz
let fizzNum = 15;

if (fizzNum % 3 === 0 && fizzNum % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzNum % 3 === 0) {
    console.log("Fizz");
} else if (fizzNum % 5 === 0) {
    console.log("Buzz");
}

// 13. Switch (1–7 weekday)
let day = 3;

switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day");
}

// 14. For loop
for (let i = 1; i <= 20; i++) {
    console.log("Number:", i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log("Even:", i);
}

// 15. While loop sum 1 to N
let N = 10;
let sum = 0;
let i = 1;

while (i <= N) {
    sum += i;
    i++;
}
console.log("Sum from 1 to", N, "=", sum);

// 16. Break & Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log("Loop:", i);
}


// ===============================
// Section 4 — Functions
// ===============================

// 17. Function sum
function add(num1, num2) {
    return num1 + num2;
}
console.log("Function Sum:", add(4, 6));

// 18. Arrow function
const addArrow = (num1, num2) => num1 + num2;
console.log("Arrow Sum:", addArrow(3, 7));

// 19. Prime check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 7 Prime?", isPrime(7));

// 20. Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString("JavaScript"));

// 21. Output
function test() {
    return;
    console.log("Hello");
}
test(); // Nothing prints (code after return doesn't execute)

// 22. Largest number in array
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("Largest:", findLargest([10, 45, 23, 89, 12]));


// ===============================
// Section 5 — Integrated Challenge
// ===============================

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}

let studentMarks = 82;
let grade = calculateGrade(studentMarks);

console.log("Marks:", studentMarks);
console.log("Grade:", grade);