// export function GenerateLotteryTickets(possibleValues: number[], selectionSize: number = 1){

// }

//
export function getRandomValue(min: number, max: number, decimals: number): number { //decimals?
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(decimals));
}


//Taken from https://stackoverflow.com/questions/48083353/i-want-to-know-how-to-shuffle-an-array-in-typescript
//Trim down later.
export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

//LEGACY: Complex Question value generators
export function GetValuesForSubtraction(range: number): number[] {
  let value1 = getRandomValue(0, range, 0);
  let value2 = getRandomValue(0, range, 0);
  
  while (value1 <= value2) {
    value1 = getRandomValue(0, range, 0);
    value2 = getRandomValue(0, range, 0);
  }
  
  return [value1, value2];
}
  