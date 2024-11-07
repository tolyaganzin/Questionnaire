import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/services/question.model';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'q-questions-management',
  standalone: false,
  templateUrl: './questions-management.component.html',
  styleUrl: './questions-management.component.scss'
})
export class QuestionsManagementComponent implements OnInit {

  questions: Question[] = [];

  constructor( private dataService: DataService) {}

  ngOnInit(): void {
    this.questions = this.dataService.getQuestions();
  }

}
