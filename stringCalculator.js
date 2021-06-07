const stringCalculator = (string) => {
    if(string.length === 1) {
        return [string, parseInt(string)];
    }

    if(string.includes('+')) {
        let sum = string.split('+').map(Number).reduce((a, b) => a + b);
        return [string, sum];
    }

    if(string.includes('-')) {
        let minus = string.split('-').map(Number).reduce((a, b) => a - b);
        return [string, minus];
    }

    if(string.includes('*')) {
        let multiply = string.split('*').map(Number).reduce((a, b) => a * b);
        return [string, multiply];
    }

    if(string.includes('/')) {
        let divide = string.split('/').map(Number).reduce((a, b) => a / b);
        return [string, divide];
    }

}

module.exports = stringCalculator;