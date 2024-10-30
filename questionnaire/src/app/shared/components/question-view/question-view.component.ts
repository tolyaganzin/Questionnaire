import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question, QuestionOption } from '../../services/question.model';

@Component({
  selector: 'q-question-view',
  standalone: false,
  templateUrl: './question-view.component.html',
  styleUrl: './question-view.component.scss'
})
export class QuestionViewComponent {

  @Input() question!: Question;
  @Input() isStatic: boolean = true;
  @Output() answered: EventEmitter<Question> = new EventEmitter<Question>();


  onCheckboxClick(option: QuestionOption): void {
    console.log(`Checkbox ${option.value} is now ${option.value ? 'checked' : 'unchecked'}`);
    this.answered.emit(this.question)
  }

}
