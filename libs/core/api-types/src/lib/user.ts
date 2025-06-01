export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string | undefined;
  image?: string | undefined;
  articlesCount?: number;
  totalFavorites?: number;
  firstArticleDate?: string; // or Date, depending on your type definition
}
