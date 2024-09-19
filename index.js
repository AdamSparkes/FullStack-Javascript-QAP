#!/usr/bin/env node

const { program } = require('commander');

// Function to generate the password with only lowercase letters
function generatePassword(length) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lower.length);
        password += lower[randomIndex];
    }
    return password;
}

// CLI definition
program
    .name('password-generator')
    .description('CLI to generate simple passwords')
    .version('1.0.0')
    .option('-l, --length <number>', 'length of the password', '8')
    .parse(process.argv);

// Parse flags and arguments
const options = program.opts();
const length = parseInt(options.length);

// Validate length input
if (isNaN(length) || length < 1) {
    console.error('Error: Length must be a positive number');
    process.exit(1);
}

// Generate and display the password
const generatedPassword = generatePassword(length);
console.log(`Generated Password: ${generatedPassword}`);



