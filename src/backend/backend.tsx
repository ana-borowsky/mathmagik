export enum OperationType{
    Plus,
    Minus,
    Multiplication,
    Division
}

export type QuestionTemplate = {
    difficulty: number,
    operations: OperationType[], // +, -, *, /, %
    generatedValues: Function[],
    questionOperation: Function,
    questionText: string,
    result: number
}

export type Question = {
    values: number[],
    questionText: string,
    options: number[],
    result: number
}

export function GenerateQuestion(difficulty: number[], operations: OperationType[]){
    
}