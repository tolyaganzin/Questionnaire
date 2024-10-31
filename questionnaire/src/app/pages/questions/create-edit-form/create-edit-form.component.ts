import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question, QuestionOption } from '../../../shared/services/question.model';

@Component({
  selector: 'q-create-edit-form',
  standalone: false,
  templateUrl: './create-edit-form.component.html',
  styleUrl: './create-edit-form.component.scss'
})
export class CreateEditFormComponent {
  questionOptions: {id: 'single' | 'multiple' | 'open'; name: string;}[] = [
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

  @Output() questionChange: EventEmitter<{question: Question; isValid:boolean}> = new EventEmitter<{question: Question; isValid:boolean}>();

  onCheckboxClick(option:  'single' | 'multiple' | 'open',$event: MouseEvent) {
    this.question.type = option;
    this.checkCharacterCount();
  }
  
  checkCharacterCount(): void {
    if(this.question.label.length < 1001 && this.question.label.length > 0) {
      this.characterCountWarning = '';
    } else {
      this.characterCountWarning = 'Character limit should be more than 1 and less than 1000!';
    }
    this.emit();
  }
  
  emit() {
    console.log(this.question.label.length);
    
    this.questionChange.emit({question: this.question, isValid: !this.characterCountWarning.length})
  }

}
