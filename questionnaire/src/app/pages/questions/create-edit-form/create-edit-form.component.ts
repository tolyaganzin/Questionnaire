import { Component, Input } from '@angular/core';
import { Question, QuestionOption } from '../../../shared/services/question.model';

@Component({
  selector: 'q-create-edit-form',
  standalone: false,
  templateUrl: './create-edit-form.component.html',
  styleUrl: './create-edit-form.component.scss'
})
export class CreateEditFormComponent {
  questionOptions = [
    { id: 'single', name: 'Single Choice' },
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'open', name: 'Open Answer' }
  ];
  
  @Input() question: Question = {
    id: -1,
    label: '',
    type: 'open',
    options: [], // Options for single/multiple choice
    openAnswer: '', // for open question
    createdAt: undefined,
    answeredAt: undefined,
    answered: false
  }
  characterCountWarning: string = '';

  onCheckboxClick(option: string,$event: MouseEvent) {
    throw new Error('Method not implemented.');
  }



  checkCharacterCount(): void {
    if(this.question.label.length < 1000 && this.question.label.length > 0) {
      this.characterCountWarning = '';
    } else {
      this.characterCountWarning = this.question.label.length > 1000 ? 'Character limit exceeded!' : 'Character limit should be more than 1 and less than 1000!';
    }
  }
}
