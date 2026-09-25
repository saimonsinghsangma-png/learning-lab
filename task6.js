function classifyNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage
console.log(classifyNumber(5));   // "Positive"
console.log(classifyNumber(-3));  // "Negative"
console.log(classifyNumber(0));   // "Zero"