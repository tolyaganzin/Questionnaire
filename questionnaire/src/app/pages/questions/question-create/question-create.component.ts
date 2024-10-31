import { Component } from '@angular/core';
import { Question } from '../../../shared/services/question.model';

@Component({
  selector: 'q-question-create',
  standalone: false,
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.scss'
})
export class QuestionCreateComponent {
  isValid: boolean = false;
  question!: Question;

  questionChange(res:{question: Question, isValid: boolean}) {
    console.log(res);
    this.isValid = res.isValid;
    this.question = res.question;
  }

  createQuestion() {

  }
}
