function charCount(char, string) {
    let charCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === char.toLowerCase()) {
            charCount++;
        }
    }
    return charCount;
}

