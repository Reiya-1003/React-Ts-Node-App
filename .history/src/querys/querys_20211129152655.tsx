import { gql } from "apollo-boost";

export const FAVO_LIST = gql`
  {
    favos {
      id
      title
      img
      movieId
    }
  }
`;
