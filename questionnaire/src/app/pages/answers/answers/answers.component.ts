import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { Question } from '../../../shared/services/question.model';

@Component({
  selector: 'q-answers',
  standalone: false,
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent implements OnInit {

  questions: Question[] = [];

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.questions = this.dataService.getQuestions()
  }

  answered(question: Question) {
    console.log(question);
  }
}
