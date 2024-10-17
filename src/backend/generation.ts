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
    temp = result * getRandomValue( 0.5, 2.5, 1);
    temp = Math.round(temp);
  }
  return temp;
}

//Division

export function GenerateDivValues(min1: number, max1: number, min2: number, max2: number): number[] {
  let seed1 = getRandomValue(min1, max1, 0);
  let seed2 = getRandomValue(min2, max2, 0);
  
  let value1 = seed1 * seed2;
  let value2 = seed1 > seed2? seed1 : seed2;
  
  return [value1, value2];
}

export function GenerateDivOptions(result: number, options: number[]): number {
  var temp = result;

  while(options.includes(temp)){
    let signal = getRandomValue(0, 1, 0);
    
    signal = signal === 0? -1 : 1;
    temp += getRandomValue(1, 7 , 0) * signal;
    temp = Math.abs(Math.round(temp));
    
  }
  return temp;
}