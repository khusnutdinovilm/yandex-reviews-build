export interface IReview {
  id: number;
  author: string;
  rating: number;
  text: string | null;
  published_at: string;
}
