
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Question } from '../../../shared/services/question.model';
import { DataService } from '../../../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class editQuestionResolverResolver implements Resolve<Question | undefined> {
  constructor(private dataService: DataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Question | undefined {
    const id = +route.paramMap.get('id')!;
    const question = this.dataService.getQuestionById(id);

    // Redirect if question is undefined
    if (!question) {
      this.router.navigate(['/questions']);  // Redirect to a "Not Found" page if needed
    }

    return question;
  }
}
