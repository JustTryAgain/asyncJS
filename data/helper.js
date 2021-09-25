export function sleep(time) {
  return new Promise((resolve => {
    setTimeout(resolve, time);
  }));
}

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}