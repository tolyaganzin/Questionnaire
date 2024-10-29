import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../services/question.model';

@Pipe({
  name: 'orderByDate',
  standalone: true
})
export class OrderByDatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(items: Question[], dateKey: keyof Question = 'createdAt'): Question[] {
    if (!Array.isArray(items) || !dateKey) {
      return items; // Return original array if it's not an array or dateKey is not provided
    }

    return items.sort((a, b) => {
      const dateA = new Date(a[dateKey] as string).getTime();
      const dateB = new Date(b[dateKey]  as string).getTime();
      return dateB - dateA; // Sort descending (newest first)
    });
  }

}
