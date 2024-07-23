export enum OperationType{
    Plus,
    Minus,
    Multiplication,
    Division
}

export type QuestionTemplate = {
    difficulty: number,
    operations: OperationType[], // +, -, *, /, %
    generatedValues: number[],
    questionOperation: Function,
    questionText: string
}

export type Question = {
    values: number[],
    questionText: string,
    options: number[],
    result: number
}

export function GenerateQuestion(difficulty: number[], operations: OperationType[]){
    
}