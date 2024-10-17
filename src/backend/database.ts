import { QuestionTemplate, OperationType , Question} from "./backend";
import { DefaultEasyQuestions, DefaultMediumQuestions } from "./questions/default";

// Define the questionTemplates array
export let questionTemplates: QuestionTemplate[] = [];

function agregateTemplates(){
    let temp: QuestionTemplate[] = [];
    temp = temp.concat(DefaultEasyQuestions.GetQuestions());
    temp = temp.concat(DefaultMediumQuestions.GetQuestions());
    return temp;
}

export function generateQuestion(difficulty: number[], operations: OperationType[]): Question {
    if(questionTemplates.length === 0){
        questionTemplates = agregateTemplates();
    }

    let pool: QuestionTemplate[] = [];
    
    questionTemplates.forEach(question => {
        if(difficulty.some(d=> question.difficulty.includes(d)) && operations.some(o=> question.operations.includes(o))){
            pool.push(question);
        }
    });

    let r = Math.floor(Math.random() * pool.length);
    return pool[r].toQuestion();
}
