import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly storageKey = 'questions';
  private readonly answerKey = 'answers';

  constructor() {}

  private generateTimestampId(): number {
    return Date.now(); // Returns the current timestamp in milliseconds
  }

  getQuestions(): Question[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getQuestionById(id: number): Question | undefined {
    return this.getQuestions().find(q => q.id === id);
  }

  addQuestion(question: Question): void {
    const questions = this.getQuestions();
    question.id = this.generateTimestampId();
    if(question.options!.length) {
      question.options = question.options!.map((item) => {
        return {...item, id: this.generateTimestampId()}
      })
    }
    questions.push(question);
    localStorage.setItem(this.storageKey, JSON.stringify(questions));
  }

  updateQuestion(updatedQuestion: Question): void {
    // or we can find index and replaced it by index
    const questions = this.getQuestions().map(q =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    localStorage.setItem(this.storageKey, JSON.stringify(questions));
  }

  deleteQuestion(id: number): void {
    const questions = this.getQuestions().filter(q => q.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(questions));
  }
}
