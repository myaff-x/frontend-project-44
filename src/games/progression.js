import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
const generateGameData = () => {
    const amount = getRandomNumber(5,10);
    const startNumber = getRandomNumber(0,10);
    const step = getRandomNumber(0,5);
    const hiddenIndex = getRandomNumber(0,amount - 1);
    return {amount, startNumber, step, hiddenIndex};
}
export const runProgressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');
    const {amount, startNumber, step, hiddenIndex} = generateGameData();
    let progression = [];
    let correctAnswer = "";
    for (let i = 0; i < amount; i += 1) {
        const currentElement = startNumber + i * step;
        if (i === hiddenIndex) {
            progression.push('..');
            correctAnswer = String(currentElement);
        }
        else {
            progression.push(String(currentElement));
        }
    }
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer === correctAnswer) {
        console.log('Correct!');
        console.log(`Congratulations, ${name}`);
    }
    else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        console.log(`Let's try again, ${name}`);
    }
}


