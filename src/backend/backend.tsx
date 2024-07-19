export enum OperationType{
    Plus,
    Minus,
    Multiplication,
    Division
}

export type Question = {
    difficulty: number,
    operations: OperationType[], // +, -, *, /, %
    generatedValues: Function[],
    questionOperation: Function,
    questionText: string,
    result: number
}

export function GenerateQuestion(difficulty: number[], operations: OperationType[]){
    
}