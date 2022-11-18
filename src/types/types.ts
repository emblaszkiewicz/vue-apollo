export type TBook = {
  bookAuthor: string;
  bookDesc: string;
  bookTitle: string;
  genre: string;
};

export type TFilterBooks<T> = {
  filterBooks: {
    books: T[];
    page: number;
    totalPages: number;
  };
};
