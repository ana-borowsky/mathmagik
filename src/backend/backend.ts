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
    questionOptions: ((result: number) => number)[];

    constructor(
        difficulty: number,
        operations: OperationType[],
        valueGenerator: () => number[],
        questionOperation: (values: number[]) => number,
        questionOptions: ((result: number) => number)[]
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

        //console.log(this);
        var options:number[] = [0, 0, 0, result];
        for(let i = 0; i < options.length - 1; i++){
            var r = 0;
            //console.log(this.questionOptions[r]);
            options[i] = this.questionOptions[r](result);
        }

        let temp: Question = new Question(choosenValues, shuffle(options), result, this.getSinal());
        return temp;
    }

    // generateOptions(result: number) {
    //     return  shuffle<number>([result, getRandomValue(0.8 * result, result + 0.1 * result, 0), getRandomValue(0.9 * result, result + 0.3 * result, 0), getRandomValue(1.1 * result, result + 0.2 * result, 0)]);
    // }

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