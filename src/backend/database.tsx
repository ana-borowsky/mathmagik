import { QuestionTemplate, OperationType , Question} from "./backend";
import { getRandomValue, GetValuesForSubtraction } from "./util";

// Define the questionTemplates array
export const questionTemplates: QuestionTemplate[] = [
    new QuestionTemplate(
        0,
        [OperationType.Sum],
        ()=> [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => 
        (values[0] + values[1]) // Sum operation
    ),
    new QuestionTemplate(
        0,
        [OperationType.Subtraction],
        ()=> GetValuesForSubtraction(250),
        (values: number[]) => 
        (values[0] - values[1]) // Sum operation
    )
];

export function generateQuestion(difficulty: number[], operations: OperationType[]): Question {
    // Temporary implementation for debug purposes, function NOT finished!

    let r = Math.floor(Math.random() * questionTemplates.length);
    return questionTemplates[r].toQuestion();
}
