import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
export const runCalcGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');
    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
        const firstNumber = getRandomNumber(1, 20);
        const secondNumber = getRandomNumber(1, 20);
        const randomAction = getRandomNumber(0, 2);
        let textAction;
        let result;
        switch(randomAction) {
            case 0:
                result = firstNumber + secondNumber;
                textAction = '+';
                break;
            case 1:
                result = firstNumber - secondNumber;
                textAction = '-';
                break;
            case 2:
                result = firstNumber * secondNumber;
                textAction = '*';
                break;
        }

        console.log(`Question: ${firstNumber} ${textAction} ${secondNumber}`);
        const guess = readlineSync.question('Your answer: ');
        if (Number(guess) === result) {
            console.log('Correct!');
        } else {
            console.log(`'${guess}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}