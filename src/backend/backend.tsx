import { getRandomValue } from "./util";
import { shuffle } from "./util";


export enum OperationType {
    Sum,
    Subtraction,
    Multiplication,
    Division
}

export class QuestionTemplate {
    difficulty: number;
    operations: OperationType[];
    valueGenerator: () => number[];
    questionOperation: (values: number[]) => number;
    questionText: string;

    constructor(
        difficulty: number,
        operations: OperationType[],
        valueGenerator: () => number[],
        questionOperation: (values: number[]) => number,
        questionText: string
    ) {
        this.difficulty = difficulty;
        this.operations = operations;
        this.valueGenerator = valueGenerator;
        this.questionOperation = questionOperation;
        this.questionText = questionText;
    }

    // Methods
    toQuestion(): Question {
        let choosenValues: number[] = []

        choosenValues = this.valueGenerator();

        let result = this.questionOperation(choosenValues);

        let temp: Question = new Question(choosenValues, this.questionText, this.generateOptions(result), result);
        temp.questionText = this.questionText;
        return temp;
    }

    generateOptions(result: number) {

        return  shuffle<number>([result, getRandomValue(0.8 * result, result + 0.1 * result, 0), getRandomValue(0.9 * result, result + 0.3 * result, 0), getRandomValue(1.1 * result, result + 0.2 * result, 0)]);
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
