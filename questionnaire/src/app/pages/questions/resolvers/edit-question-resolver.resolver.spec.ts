import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { editQuestionResolverResolver } from './edit-question-resolver.resolver';

describe('editQuestionResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => editQuestionResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
