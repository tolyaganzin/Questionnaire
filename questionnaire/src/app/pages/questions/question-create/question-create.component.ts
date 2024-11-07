import { Component } from '@angular/core';
import { Question } from '../../../shared/services/question.model';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'q-question-create',
  standalone: false,
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.scss'
})
export class QuestionCreateComponent {
  isValid: boolean = false;
  question!: Question;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  questionChange(res:{question: Question, isValid: boolean}) {
    console.log(res);
    this.isValid = res.isValid;
    this.question = res.question;
  }

  createQuestion() {
    this.dataService.addQuestion(this.question)
    this.router.navigate(['/questions'])
  }
}
