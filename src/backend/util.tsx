export function GenerateLotteryTickets(possibleValues: number[], selectionSize: number = 1){

}

//
export function getRandomValue(min: number, max: number, decimals: number): number { //decimals?
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(decimals));
}