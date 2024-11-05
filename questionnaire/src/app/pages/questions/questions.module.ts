import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionEditDeleteComponent } from './question-edit-delete/question-edit-delete.component';
import { QuestionsManagementComponent } from './questions-management/questions-management.component';


@NgModule({
  declarations: [
    CreateEditFormComponent,
    QuestionCreateComponent,
    QuestionEditDeleteComponent,
    QuestionsManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    QuestionsRoutingModule
  ],
  exports: [CreateEditFormComponent]
})
export class QuestionsModule { }
