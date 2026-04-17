import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const checkPrime = (number) => {
    if (number < 2 || number % 2 === 0) {return false}
    if (number === 2) {return true}
    const sqrtNumber = Math.sqrt(number);
    for(let i = 3;i <= sqrtNumber;i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

export const runPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let number = getRandomNumber(0,100);
    let correctAnswer = checkPrime(number)
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        console.log(`Congratulations, ${name}`);
    }
    else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was no`);
        console.log(`Let's try again, ${name}`);
    }
} 