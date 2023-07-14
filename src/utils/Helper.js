

// //all password options are connected to the characters variable
// //the user just choos lenght
// let characters = '';
// let passwordLength = 0;


// //uppercase
// const setUpperCase = isUpperCase => {
//     if (isUpperCase) {
//         characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     }
//     return '';
// }

// //lowercase
// const setLowerCase = isLowerCase => {
//     if (isLowerCase) {
//         characters += 'abcdefghijklmnopqrstuvwxyz';
//     }
//     return '';
// }

// //symbols
// const setSymbols = isSymbol => {
//     if (isSymbol) {
//         characters += '!@#$%^&*()<>,.?/[]{}-=_+|/';
//     }
//     return '';
// }

// //numbers
// const setNumber = isNumeric => {
//     if (isNumeric) {
//         characters += '0123456789';
//     }
//     return '';
// }


// //method returning random integer - takes minimum and maximum value to return 
// //integer based on parameters
// const getRandomInteger = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //selects random characters from the character variable 
// const passwordCharacters = () => {
//     const characterList = characters;
//     let password = '';
//     if (characterList.length > 0) {
//         for (let i = 0; i < passwordLength; i++) {
//             password += characterList[getRandomInteger(0, characterList.length - 1)];
//         }
//         characters = '';
//         passwordLength = 0;

//         return password;
//     }
// }

// //export to the components
// export const setPasswordLength = length => {
//     passwordLength = length;
//     return passwordLength;
// }

// export const generatePasswordLength = () => {
//     return passwordLength;
// }

// export const generatePassword = (passwordProps, pwdLength) => {
//     const { uppercase, lowercase, symbols, numbers } = passwordProps;

//     setPasswordLength(pwdLength);
//     setUpperCase(uppercase);
//     setLowerCase(lowercase);
//     setSymbols(symbols);
//     setNumber(numbers);

//     const password = passwordCharacters();
//     return password;
// }

// export const copyToClipBoard = elementRef => {
//     elementRef.select();
//     document.execCommand('copy');
// }
