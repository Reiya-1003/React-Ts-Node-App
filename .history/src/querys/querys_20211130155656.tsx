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

export const ADD_FAVO = gql`
  mutation($title: String!, $img: String!, $movieId: String!) {
    addDirector(title: $title, img: $img, movieId: $movieId) {
      title
      img
      movieId
    }
  }
`;
