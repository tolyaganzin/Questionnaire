import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { QuestionCreateComponent } from './question-create/question-create.component';


@NgModule({
  declarations: [
    CreateEditFormComponent,
    QuestionCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // CreateEditFormComponent,
    QuestionsRoutingModule
  ],
  exports: [CreateEditFormComponent]
})
export class QuestionsModule { }
