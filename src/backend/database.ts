import { QuestionTemplate, OperationType , Question} from "./backend";
import { getRandomValue } from "./util";
import { readSettings } from './storage'
import { GenerateDivOptions, GenerateDivValues, GenerateMultiOptions, GenerateSubOptions, GenerateSumOptions } from "./generation";

// Define the questionTemplates array
export const questionTemplates: QuestionTemplate[] = [
    new QuestionTemplate(
        0,
        [OperationType.Sum],
        ()=> [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => 
        (values[0] + values[1]), // Sum operation
        [(result: number, options: number[]) => GenerateSumOptions(result, options)] // Options generator
    ),
    new QuestionTemplate(
        0,
        [OperationType.Subtraction],
        ()=> [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => 
        (values[0] - values[1]), // Min operation
        [(result: number, options: number[]) => GenerateSubOptions(result, options)] // Options generator
    ),
    new QuestionTemplate(
        0,
        [OperationType.Multiplication],
        ()=> [getRandomValue(1, 10, 0), getRandomValue(2, 15, 0)],
        (values: number[]) => 
        (values[0] * values[1]), 
        [(result: number, options: number[]) => GenerateMultiOptions(result, options)] // Options generator
    ),
    new QuestionTemplate(
        0,
        [OperationType.Division],
        ()=> GenerateDivValues(1, 10, 1, 15),
        (values: number[]) => 
        (values[0] / values[1]), 
        [(result: number, options: number[]) => GenerateDivOptions(result, options)] // Options generator
    )
];

export function generateQuestion(difficulty: number[], operations: OperationType[]): Question {
    // Temporary implementation for debug purposes, function NOT finished!

    //TODO: Currently used for testing purposes, replace with actual implementation later.
    const storageQuestionTypes = readSettings().questionTypes
    //console.log(storageQuestionTypes);

    //TODO: Not final implementation
    let pool: QuestionTemplate[] = [];
    let c = 0;
    if(storageQuestionTypes.sum){
        c = pool.push(questionTemplates[0]);
    }
    if(storageQuestionTypes.subtraction){
        c = pool.push(questionTemplates[1]);
    }
    if(storageQuestionTypes.multiplication){
        c = pool.push(questionTemplates[2]);
    }
    if(storageQuestionTypes.division){
        c = pool.push(questionTemplates[3]);
    }

    //console.log(pool.length);

    let r = Math.floor(Math.random() * c);
    return pool[r].toQuestion();
}
