import {Chapter} from './chapter';

export class Formation {
  id: number;
  name: string;
  description: string;
  icon: {
    path: string;
    format: string;
  };
  pole: {
    id: number;
    name: string
  };
  author: {
    id: number;
    firstname: string;
    lastname: string;
    icon: {
      path: string;
      format: string;
    };
  };
  chapters: Chapter[];
}
