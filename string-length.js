function stringLength(string) {
    if (string.length === 0 || string.length > 10) {
        return "Invalid string"
    }
    return string.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }

  function capitalize(string) {
    return (string[0].toUpperCase() + string.slice(1));
  }

module.exports = {
    stringLength,
    reverseString,
    Calculator,
    capitalize
};