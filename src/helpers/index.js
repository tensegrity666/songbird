const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

const NUMBER_OF_ANSWERS = [0, 5];
const randomIndex = () => randomInteger(...NUMBER_OF_ANSWERS);

const hideName = (name) => {
  if (!name) {
    return '...';
  }
  return name.replace(/./gm, '⚹');
};

export { randomInteger, hideName, randomIndex };
