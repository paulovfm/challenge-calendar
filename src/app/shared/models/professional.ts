import { Review } from './review';

export class Professional {
  id: number;
  name: string;
  category: string;
  country: string;
  value: number;
  time: number;
  rating: number;
  description: string;
  review: Review[];
}
