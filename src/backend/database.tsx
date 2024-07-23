import { QuestionTemplate, Question, OperationType } from "./backend";
import { GetRandomValue } from "./util";

//Template Array and Meta Data
const questionTemplates: QuestionTemplate[] = [
    {
    difficulty: 0,
    operations: [OperationType.Plus], // +, -, *, /, %
    generatedValues: [GetRandomValue(0,100,1),GetRandomValue(0,100,1)],
    questionOperation: function(){
        return this.generatedValues[0] + this.generatedValues[1];
    },
    questionText: "Quanto é %1 + %2?" 
    }
]