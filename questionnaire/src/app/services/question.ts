export interface QuestionOption {
  id: number;
  name: string;
  value: boolean;
}

export interface Question {
  id: string;
  label: string;
  type: 'single' | 'multiple' | 'open';
  options?: QuestionOption[]; // Options for single/multiple choice
  openAnswer: string; // for open question
  createdAt: Date;
  answeredAt?: Date;
  answered?: boolean;
}
  
