import { gql } from "apollo-boost";

export const MOVIE_LIST = gql`
  {
    favos {
      id
      title
      img
      movieId
    }
  }
`;
