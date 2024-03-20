export interface AnyCharacter {
  name: string;
  family: string;
  age: number;
  type: string;
  message: string;
  isAlive: boolean;
  kingdomYears?: number;
  weapon?: string;
  skillsRange?: number;
  lord?: object;
  master?: object;
  serverRange?: number;
}
