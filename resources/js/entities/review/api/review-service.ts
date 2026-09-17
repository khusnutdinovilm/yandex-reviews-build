import { http, type IPaginated } from "@/shared/api";
import type { IReview } from "../model/types";

class ReviewService {
  async getReviews(page = 1) {
    return http.get<IPaginated<IReview>>("/api/reviews", { params: { page } });
  }
}

export const reviewService = new ReviewService();
