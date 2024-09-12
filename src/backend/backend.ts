import { randomInRange } from "@tsparticles/engine";
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
    questionOptions: ((result: number, options: number[]) => number)[];

    constructor(
        difficulty: number,
        operations: OperationType[],
        valueGenerator: () => number[],
        questionOperation: (values: number[]) => number,
        questionOptions: ((result: number, options: number[]) => number)[]
    ) {
        this.difficulty = difficulty;
        this.operations = operations;
        this.valueGenerator = valueGenerator;
        this.questionOperation = questionOperation;
        this.questionOptions = questionOptions;
    }

    // Methods
    toQuestion(): Question {
        let choosenValues: number[] = []

        choosenValues = this.valueGenerator();

        let result = this.questionOperation(choosenValues);

        var options:number[] = [0, 0, 0, result];
        for(let i = 0; i < options.length - 1; i++){
            var r = randomInRange(this.questionOptions.length - 1);
            options[i] = this.questionOptions[r](result, options);
        }

        let temp: Question = new Question(choosenValues, shuffle(options), result, this.getSinal());
        return temp;
    }


    getSinal(): String{
        switch(this.operations[0]){
            case OperationType.Sum:
                return "+";
            case OperationType.Subtraction:
                return "-";
            case OperationType.Multiplication:
                return "*";
            case OperationType.Division:
                return "/";
        }
        return "";
    }
}

export class Question {
    questionValues: number[];
    options: number[];
    result: number;
    signal: String;

    constructor(
        questionValues: number[],
        options: number[],
        result: number,
        signal: String
    ) {
        this.questionValues = questionValues;
        this.options = options;
        this.result = result;
        this.signal = signal;
    }
}