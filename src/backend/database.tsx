import { QuestionTemplate, Question, OperationType } from "./backend";
import { GetRandomValue } from "./util";

//Template Arrays   
const questionTemplates: QuestionTemplate[] = [
    {
    difficulty: 0,
    operations: [OperationType.Plus], // +, -, *, /, %
    generatedValues: [GetRandomValue(0,100,1),GetRandomValue(0,100,1)],
    questionOperation: function(){
        return this.generatedValues[0] + this.generatedValues[1];
    },
    questionText: "%1 + %2" 
    }
]