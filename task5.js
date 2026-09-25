function checkPassword(passwords) {
    const correctPassword = "1234";
    let i = 0;
    let result;

    do {
        if (passwords[i] === correctPassword) {
            result = "Password Correct";
            break;
        }
        i++;
    } while (i < passwords.length);

    if (result !== "Password Correct") {
        result = "Password Failed";
    }

    return result;
}

// Example usage
console.log(checkPassword(["0000", "1111", "1234", "9999"])); // "Password Correct"
console.log(checkPassword(["0000", "1111", "5555"]));          // "Password Failed"