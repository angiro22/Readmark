export type BookStatus = 'reading' | 'tbr' | 'read' | 'dnf' | '';

export interface Book {
  id: string;
  title: string;
  author: string;
  translator?: string;
  coverUrl?: string;
  description?: string;
  genres: string[];
  totalPages: number;
  pagesRead?: number;
  releaseYear?: number;
  startDate?: string;
  endDate?: string;
  status: BookStatus;
  price?: number;
  amazonUrl?: string;
  ibsUrl?: string;
}
