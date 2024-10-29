import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';
import { OrderByAnsweredFlagPipe } from './pipes/order-by-answered-flag.pipe';
import { DataService } from './services/data.service';
import { Question, QuestionOption } from './services/question.model';

@NgModule({
  declarations: [
    QuestionViewComponent,
    OrderByDatePipe,
    OrderByAnsweredFlagPipe,
    DataService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    QuestionViewComponent,
    OrderByDatePipe,
    OrderByAnsweredFlagPipe,
    DataService
  ]
})
export class SharedModule { }
