function transformString(input) {
    const length = input.length;
    let output = '';

    if (length % 3 === 0) {
        output = input.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        output = [...input].map(char => char.charCodeAt(0)).join('');
    }

    if (length % 15 === 0) {
        let reversed = input.split('').reverse().join('');
        output = [...reversed].map((char, index) => {
            const ascii = char.charCodeAt(0);
            return index === length - 1 ? ascii.toString() : ascii.toString() + (char !== ' ' ? '' : ' ');
        }).join('');
    }

    return output || input;
}
