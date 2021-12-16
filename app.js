function palindrome(str) {
    let newArray = [];
    let isPalindrome = false;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        // TODO incorporate regex here to check for non-alphanumeric characters
        if (/\w/.test(str[i]) && str[i] !== '_') {
            newArray.push(str[i].toLowerCase());
        }
    }
    result.push(newArray);
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === newArray[newArray.length - i - 1]) {
            isPalindrome = true;
        } else {
            return false;
        }
    }
    return true;
}
