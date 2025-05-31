export interface User {
  username: string;
  articlesCount: number;
  totalFavorites: number;
  firstArticleDate: string;
  token?: string;
}
