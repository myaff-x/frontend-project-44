import { randomInt } from 'node:crypto';
export const getRandomNumber = (from, to) => randomInt(from, to + 1);