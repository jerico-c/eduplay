
export interface ConcreteStage {
  objectName: string;
  objectImageURL: string;
  correctCount: number;
}

export interface AbstractStage {
  question: string;
  options: number[];
  answer: number;
}

export interface GameLevel {
  level: number;
  concrete: ConcreteStage;
  abstract: AbstractStage;
}

export type GameState = 'loading' | 'playing' | 'finished';
export type CurrentStage = 'concrete' | 'pictorial' | 'abstract';
