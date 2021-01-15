export const getRandom = (max: number, min: number = 0, int?: boolean) => {
  const num = Math.random() * (max - min + 1) + min;

  return int ? Math.floor(num) : num;
};
