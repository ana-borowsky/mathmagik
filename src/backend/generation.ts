import { getRandomValue } from "./util";

//LEGACY: Complex Question value generators for subtraction
export function GenerateResultForSubtraction(range: number): number[] {
  let value1 = getRandomValue(0, range, 0);
  let value2 = getRandomValue(0, range, 0);
  
  while (value1 <= value2) {
    value1 = getRandomValue(0, range, 0);
    value2 = getRandomValue(0, range, 0);
  }
  
  return [value1, value2];
}

//Generate Options for Sum
//This is not an ideal implemention, it can still be vastly improved.
export function GenerateSumOptions(result: number, options: number[]): number {
  var temp = result;
  while(options.includes(temp)){
    temp = result + getRandomValue(-25,40,0);
  }
  return temp;
}

//Generate Options for Sub
//This is not an ideal implemention, it can still be vastly improved.
export function GenerateSubOptions(result: number, options: number[]): number {
  var temp = result;
  while(options.includes(temp)){
    temp = result + getRandomValue(-25,25,0);
  }
  return temp;
}

export function GenerateMultiOptions(result: number, options: number[]): number {
  var temp = result;
  while(options.includes(temp)){
    temp = result * getRandomValue( 2, 5,0);
  }
  return temp;
}