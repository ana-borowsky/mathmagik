export enum OperationType{
    Sum,
    Subtraction,
    Multiplication,
    Division
}

export class QuestionTemplate {
    difficulty: number;
    operations: OperationType[];
    generatedValues: number[];
    questionOperation: Function;
    questionText: string;

    constructor(
        difficulty: number,
        operations: OperationType[],
        generatedValues: number[],
        questionOperation: Function,
        questionText: string
    ) {
        this.difficulty = difficulty;
        this.operations = operations;
        this.generatedValues = generatedValues;
        this.questionOperation = questionOperation;
        this.questionText = questionText;
    }
}

export type Question = {
    values: number[],
    questionText: string,
    options: number[],
    result: number
}

export function GenerateQuestion(difficulty: number[], operations: OperationType[]){
    //Temporary implementation for debug purposes, function NOT finished!
    return 
}