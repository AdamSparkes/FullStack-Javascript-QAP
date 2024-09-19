#!/usr/bin/env node

const { program } = require('commander');

// Function to generate the password
function generatePassword(length, includeNumbers, includeUppercase, includeSymbols) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characters = lower;
    if (includeNumbers) characters += numbers;
    if (includeUppercase) characters += uppercase;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
// CLI definition
program
    .name('password-generator')
    .description('CLI to generate secure passwords')
    .version('1.0.0')
    .option('-l, --length <number>', 'length of the password', '8')
    .option('-n, --numbers', 'include numbers in the password')
    .option('-u, --uppercase', 'include uppercase letters in the password')
    .option('-s, --symbols', 'include symbols in the password')
    .parse(process.argv);

// Parse flags and arguments
const options = program.opts();
const length = parseInt(options.length);
const includeNumbers = options.numbers || false;
const includeUppercase = options.uppercase || false;
const includeSymbols = options.symbols || false;

// Generate and display the password
console.log(`Generated Password: ${generatePassword(length, includeNumbers, includeUppercase, includeSymbols)}`);