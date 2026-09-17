export interface IPaginated<T> {
  data: T[];
  meta: { current_page: number; last_page: number; per_page: number; total: number };
}

export interface IApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export type IResource<T> = { data: T };
