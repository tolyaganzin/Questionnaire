import { Component } from '@angular/core';
import { Question } from '../../../shared/services/question.model';
import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.question = this.route.snapshot.data['questionData'];
    this.questionOld = this.route.snapshot.data['questionData'];
  }

  questionChange(res:{question: Question, isValid: boolean}) {
    console.log(res);
    this.isValid = res.isValid;
    this.question = res.question;
  }

  editQuestion() {
    this.dataService.updateQuestion(this.question)
    this.router.navigate(['/questions'])
    alert("question updated")
  }
  deleteQuestion() {
    this.dataService.deleteQuestion(this.question.id)
    this.router.navigate(['/questions'])
    alert("question deleted")
  }
}
