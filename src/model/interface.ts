export interface AnyCharacter {
  name: string;
  family: string;
  age: number;
  type: 'king' | 'fighter' | 'counselor' | 'squire';
  message: string;
  isAlive: boolean;
  kingdomYears?: number;
  weapon?: string;
  skillsRange?: number;
  lord?: object;
  master?: object;
  serverRange?: number;
}
