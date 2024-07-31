export function GenerateLotteryTickets(possibleValues: number[], selectionSize: number = 1){

}

//
export function GetRandomValue(min: number, max: number, decimals: number): number {
    const randomValue = Math.random() * (max - min) + min;
    return parseFloat(randomValue.toFixed(decimals));
}