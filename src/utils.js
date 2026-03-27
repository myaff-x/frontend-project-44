import { randomInt } from 'crypto';
export const getRandomNumber = (from, to) => randomInt(from, to + 1);