export function GenerateLotteryTickets(possibleValues: number[], selectionSize: number = 1){

}

//
export function getRandomValue(min: number, max: number, decimals: number): number { //decimals?
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(decimals));
}

export function shuffle(array: Array<number>) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  