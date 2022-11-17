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
