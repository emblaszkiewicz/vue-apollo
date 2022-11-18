import gql from "graphql-tag";

export const getAllBooks = () => gql`
  query Query {
    filterBooks {
      books {
        bookAuthor
        bookDesc
        bookTitle
        genre
      }
    }
  }
`;

export const pagination = () => gql`
  query FilterBooks(
    $limitPerPage: Int
    $bookAuthor: String
    $bookTitle: String
    $bookDesc: String
    $genre: TGenres
    $page: Int
    $sort: TSort
  ) {
    filterBooks(
      limitPerPage: $limitPerPage
      bookAuthor: $bookAuthor
      bookTitle: $bookTitle
      bookDesc: $bookDesc
      genre: $genre
      page: $page
      sort: $sort
    ) {
      books {
        bookAuthor
        bookDesc
        bookTitle
        genre
      }
      page
      totalPages
    }
  }
`;

export const addBook = () => gql`
  mutation Mutation(
    $bookAuthor: String
    $bookTitle: String
    $bookDesc: String
    $genre: TGenres
  ) {
    addBook(
      bookAuthor: $bookAuthor
      bookTitle: $bookTitle
      bookDesc: $bookDesc
      genre: $genre
    ) {
      bookAuthor
      bookTitle
      bookDesc
      genre
    }
  }
`;

export const sub = () => gql`
  subscription Subscription($genre: TGenres) {
    filterBookAdded(genre: $genre) {
      bookAuthor
      bookDesc
      bookTitle
      genre
    }
  }
`;
