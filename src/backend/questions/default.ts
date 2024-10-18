import { OperationType, QuestionTemplate } from "../backend";
import {
  GenerateDivOptions,
  GenerateDivValues,
  GenerateMultiOptions,
  GenerateSubOptions,
  GenerateSumOptions,
} from "../generation";
import { getRandomValue } from "../util";

//TEMPORARY IMPLEMENTATION, WILL BE REPLACED WITH QUESTION BUILDER LATER.

//Default questions at an easy level of difficulty
export abstract class DefaultEasyQuestions {
  static GetQuestions() {
    return ([
      new QuestionTemplate(
        [1],
        [OperationType.Sum],
        () => [getRandomValue(1, 10, 0), getRandomValue(1, 10, 0)],
        (values: number[]) => values[0] + values[1], // Sum operation
        [
          (result: number, options: number[]) =>
            GenerateSumOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [1],
        [OperationType.Subtraction],
        () => [getRandomValue(1, 10, 0), getRandomValue(1, 10, 0)],
        (values: number[]) => values[0] - values[1], // Min operation
        [
          (result: number, options: number[]) =>
            GenerateSubOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [1],
        [OperationType.Multiplication],
        () => [getRandomValue(1, 5, 0), getRandomValue(1, 5, 0)],
        (values: number[]) => values[0] * values[1],
        [
          (result: number, options: number[]) =>
            GenerateMultiOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [1],
        [OperationType.Division],
        () => GenerateDivValues(1, 5, 1, 5),
        (values: number[]) => values[0] / values[1],
        [
          (result: number, options: number[]) =>
            GenerateDivOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2],
        [OperationType.Sum],
        () => [getRandomValue(1, 50, 0), getRandomValue(0, 50, 0)],
        (values: number[]) => values[0] + values[1], // Sum operation
        [
          (result: number, options: number[]) =>
            GenerateSumOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2],
        [OperationType.Subtraction],
        () => [getRandomValue(1, 50, 0), getRandomValue(0, 50, 0)],
        (values: number[]) => values[0] - values[1], // Min operation
        [
          (result: number, options: number[]) =>
            GenerateSubOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2],
        [OperationType.Multiplication],
        () => [getRandomValue(1, 20, 0), getRandomValue(0, 20, 0)],
        (values: number[]) => values[0] * values[1],
        [
          (result: number, options: number[]) =>
            GenerateMultiOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2],
        [OperationType.Division],
        () => GenerateDivValues(1, 20, 1, 20),
        (values: number[]) => values[0] / values[1],
        [
          (result: number, options: number[]) =>
            GenerateDivOptions(result, options),
        ] // Options generator
      )
    ]);
  }
}

//Default questions at a mid level of difficulty
export abstract class DefaultMediumQuestions {
  static GetQuestions() {
    return ([
      new QuestionTemplate(
        [2, 3],
        [OperationType.Sum],
        () => [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => values[0] + values[1], // Sum operation
        [
          (result: number, options: number[]) =>
            GenerateSumOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2, 3],
        [OperationType.Subtraction],
        () => [getRandomValue(0, 250, 0), getRandomValue(0, 250, 0)],
        (values: number[]) => values[0] - values[1], // Min operation
        [
          (result: number, options: number[]) =>
            GenerateSubOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2, 3],
        [OperationType.Multiplication],
        () => [getRandomValue(1, 10, 0), getRandomValue(2, 15, 0)],
        (values: number[]) => values[0] * values[1],
        [
          (result: number, options: number[]) =>
            GenerateMultiOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [2],
        [OperationType.Division],
        () => GenerateDivValues(1, 10, 1, 15),
        (values: number[]) => values[0] / values[1],
        [
          (result: number, options: number[]) =>
            GenerateDivOptions(result, options),
        ] // Options generator
      )
    ]);
  }
}
  //Default questions at a mid level of difficulty
export abstract class DefaultHardQuestions {
  static GetQuestions() {
    return ([
      new QuestionTemplate(
        [3],
        [OperationType.Sum],
        () => [getRandomValue(100, 10_000, 0), getRandomValue(30, 1000, 0)],
        (values: number[]) => values[0] + values[1], // Sum operation
        [
          (result: number, options: number[]) =>
            GenerateSumOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [3],
        [OperationType.Subtraction],
        () => [getRandomValue(0, 350, 0), getRandomValue(50, 350, 0)],
        (values: number[]) => values[0] - values[1], // Min operation
        [
          (result: number, options: number[]) =>
            GenerateSubOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [3],
        [OperationType.Multiplication],
        () => [getRandomValue(5, 20, 0), getRandomValue(6, 40, 0)],
        (values: number[]) => values[0] * values[1],
        [
          (result: number, options: number[]) =>
            GenerateMultiOptions(result, options),
        ] // Options generator
      ),
      new QuestionTemplate(
        [3],
        [OperationType.Division],
        () => GenerateDivValues(11, 25, 11, 35),
        (values: number[]) => values[0] / values[1],
        [
          (result: number, options: number[]) =>
            GenerateDivOptions(result, options),
        ] // Options generator
      )
    ]);
  }
}
