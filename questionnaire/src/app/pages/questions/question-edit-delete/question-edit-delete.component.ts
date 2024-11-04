import { Component } from '@angular/core';
import { Question } from '../../../shared/services/question.model';
import { DataService } from '../../../shared/services/data.service';

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

  constructor(private dataService: DataService) { }
  
  getQuestion() {
    this.dataService.getQuestionById(1)
  }
  questionChange(res:{question: Question, isValid: boolean}) {
    console.log(res);
    this.isValid = res.isValid;
    this.question = res.question;
  }

  editQuestion() {
    this.dataService.updateQuestion(this.question)
  }
  deleteQuestion() {
    this.dataService.deleteQuestion(this.question.id)
  }
}
