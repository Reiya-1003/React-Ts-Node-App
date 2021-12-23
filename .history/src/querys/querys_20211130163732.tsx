import { gql } from "apollo-boost";

export const FAVO_LIST = gql`
  {
    favos {
      id
      title
      img
    }
  }
`;

export const ADD_FAVO = gql`
  mutation($title: String!, $img: String!) {
    addFavo(title: $title, img: $img) {
      title
      img
    }
  }
`;
