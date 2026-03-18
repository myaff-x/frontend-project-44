import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};