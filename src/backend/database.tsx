import { QuestionTemplate, OperationType , Question} from "./backend";
import { getRandomValue } from "./util";

// Define the questionTemplates array
export const questionTemplates: QuestionTemplate[] = [
    new QuestionTemplate(
        0,
        [OperationType.Sum],
        ()=> [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => 
        (values[0] + values[1]), // Sum operation
        "%1 + %2" // Format string for the question
    )
];

export function generateQuestion(difficulty: number[], operations: OperationType[]): Question {
    // Temporary implementation for debug purposes, function NOT finished!

    return questionTemplates[0].toQuestion();
}
