import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../../shared/services/question.model';

@Component({
  selector: 'q-questions-management',
  standalone: false,
  templateUrl: './questions-management.component.html',
  styleUrl: './questions-management.component.scss'
})
export class QuestionsManagementComponent implements OnInit {

  questions: Question[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the data preloaded by the resolver
    this.questions = this.route.snapshot.data['questions'];
  }

}
