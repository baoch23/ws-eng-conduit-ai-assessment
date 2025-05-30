import { UserStats } from 'libs/core/api-types/src/lib/user-stats';

export const mockUserStats: UserStats[] = [
  {
    id: 1,
    username: 'john_doe',
    articlesCount: 5,
    totalFavorites: 150,
    firstArticleDate: '2024-01-15',
  },
  {
    id: 2,
    username: 'jane_smith',
    articlesCount: 3,
    totalFavorites: 120,
    firstArticleDate: '2024-02-10',
  },
  // Add more mock users as needed
];
