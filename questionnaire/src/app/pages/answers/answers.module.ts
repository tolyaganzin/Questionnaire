import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswersRoutingModule } from './answers-routing.module';
import { AnswersComponent } from './answers/answers.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AnswersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnswersRoutingModule
  ]
})
export class AnswersModule { }
