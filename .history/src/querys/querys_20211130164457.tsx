import { gql } from "apollo-boost";

export const FAVO_LIST = gql`
  {
    favos {
      id
      title
      img
      movienumber
    }
  }
`;

export const ADD_FAVO = gql`
  mutation($title: String!, $img: String!, $movienumber: String!) {
    addFavo(title: $title, img: $img, movienumber: $movienumber) {
      title
      img
      movienumber
    }
  }
`;
