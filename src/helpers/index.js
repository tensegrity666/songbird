const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

const hideName = (name) => {
  if (!name) {
    return '...';
  }
  return name.replace(/./gm, '⚹');
};

export { randomInteger, hideName };
