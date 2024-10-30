import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../services/question.model';

@Pipe({
  name: 'orderByAnsweredFlag',
  standalone: false
})
export class OrderByAnsweredFlagPipe implements PipeTransform {

  transform(questions: Question[], valueCheck: boolean = false): Question[] {
    if (!questions) {
      return [];
    }
    // Filter the array based on the value of `valueCheck`, defaulting to `false`
    return questions.filter(question => question.answered === valueCheck);
  }

}
