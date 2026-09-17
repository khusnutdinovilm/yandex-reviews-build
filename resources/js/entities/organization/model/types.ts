export interface IOrganization {
  id: number;
  url: string;
  business_id: string | null;
  name: string | null;
  rating: number | null;
  ratings_count: number | null;
  reviews_count: number | null;
}
