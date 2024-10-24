import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditDeleteComponent } from './question-edit-delete.component';

describe('QuestionEditDeleteComponent', () => {
  let component: QuestionEditDeleteComponent;
  let fixture: ComponentFixture<QuestionEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionEditDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
