import { getRandomValue } from "./util";

export enum OperationType {
    Sum,
    Subtraction,
    Multiplication,
    Division
}

export class QuestionTemplate {
    difficulty: number;
    operations: OperationType[];
    generatedValues: (() => number)[];
    questionOperation: (values: number[]) => number;
    questionText: string;

    constructor(
        difficulty: number,
        operations: OperationType[],
        generatedValues: (() => number)[],
        questionOperation: (values: number[]) => number,
        questionText: string
    ) {
        this.difficulty = difficulty;
        this.operations = operations;
        this.generatedValues = generatedValues;
        this.questionOperation = questionOperation;
        this.questionText = questionText;
    }

    // Methods
    ToQuestion(): Question {
        let chosenValues: number[] = []

        this.generatedValues.forEach(element => {
            chosenValues.push(element());
        });

        let result = this.questionOperation(chosenValues);

        let temp: Question = new Question(chosenValues, this.questionText, this.generateOptions(result), result);
        temp.questionText = this.questionText;
        return temp;
    }

    generateOptions(result: number) {
        // const getRandomInt = (max: number) => Math.floor(Math.random() * max);

        return  [result, getRandomValue(1, 200, 0), getRandomValue(1, 200, 0), getRandomValue(1, 200, 0)];
    }
}



export class Question {
    questionValues: number[];
    questionText: string;
    options: number[];
    result: number;

    constructor(
        questionValues: number[],
        questionText: string,
        options: number[],
        result: number
    ) {
        this.questionValues = questionValues;
        this.questionText = questionText;
        this.options = options;
        this.result = result;
    }
}
