/* 
  Filename: ComplexCode.js
  Description: A complex and elaborate code demonstrating advanced concepts in JavaScript.
*/

// Constants
const MAX_ITERATIONS = 100000;
const PI = 3.14159;

// Class definition
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition of complex numbers
  add(other) {
    this.real += other.real;
    this.imaginary += other.imaginary;
  }

  // Subtraction of complex numbers
  subtract(other) {
    this.real -= other.real;
    this.imaginary -= other.imaginary;
  }

  // Multiplication of complex numbers
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    this.real = real;
    this.imaginary = imaginary;
  }

  // Division of complex numbers
  divide(other) {
    const denominator = other.real ** 2 + other.imaginary ** 2;
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    this.real = real;
    this.imaginary = imaginary;
  }

  // Compute the magnitude of the complex number
  magnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Check if two complex numbers are equal
  isEqual(other) {
    return this.real === other.real && this.imaginary === other.imaginary;
  }

  // Static method to create a complex number from polar coordinates
  static fromPolar(magnitude, angle) {
    const real = magnitude * Math.cos(angle);
    const imaginary = magnitude * Math.sin(angle);
    return new Complex(real, imaginary);
  }
}

// Function to generate complex numbers
function generateComplexNumbers() {
  const complexNumbers = [];

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const magnitude = Math.random() * 10;
    const angle = Math.random() * 2 * PI;
    const complexNumber = Complex.fromPolar(magnitude, angle);

    complexNumbers.push(complexNumber);
  }

  return complexNumbers;
}

// Create an array of complex numbers
const complexArray = generateComplexNumbers();

// Perform various operations on the complex numbers
const result = new Complex(0, 0);

for (const complexNumber of complexArray) {
  result.add(complexNumber);
  result.subtract(complexNumber);
  result.multiply(complexNumber);
  result.divide(complexNumber);
}

console.log("Final Result:", result.magnitude());