import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsManagementComponent } from './questions-management/questions-management.component';
import { QuestionEditDeleteComponent } from './question-edit-delete/question-edit-delete.component';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { editQuestionResolverResolver } from './resolvers/edit-question-resolver.resolver';

const routes: Routes = [
  { path: '', component: QuestionsManagementComponent },
  { path: 'edit-delete/:id', component: QuestionEditDeleteComponent, resolve: { questionData: editQuestionResolverResolver }, },
  { path: 'create', component: QuestionCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
