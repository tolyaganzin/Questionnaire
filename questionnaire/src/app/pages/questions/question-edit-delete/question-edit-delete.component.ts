import { Component } from '@angular/core';
import { Question } from '../../../shared/services/question.model';

@Component({
  selector: 'q-question-edit-delete',
  standalone: false,
  templateUrl: './question-edit-delete.component.html',
  styleUrl: './question-edit-delete.component.scss'
})
export class QuestionEditDeleteComponent {
  isValid: boolean = false;
  questionOld!: Question;
  question!: Question;
  
  getQuestion() {

  }
  questionChange(res:{question: Question, isValid: boolean}) {
    console.log(res);
    this.isValid = res.isValid;
    this.question = res.question;
  }

  editQuestion() {

  }
  deleteQuestion() {

  }
}
