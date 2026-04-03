import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
const getGcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export const runGcdGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.')

    const roundsCount = 3;

    for(let i = 0;i < roundsCount;i += 1) {
        const number1 = getRandomNumber(0, 100);;
        const number2 = getRandomNumber(0, 100);;
        console.log(`Question: ${number1} ${number2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = String(getGcd(number1,number2));
        if(userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

