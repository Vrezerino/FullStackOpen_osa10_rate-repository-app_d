import { gql } from "@apollo/client";

export const SIGN_IN = gql`
mutation LogIn($username: String!, $password: String!){
  authorize(credentials: {username: $username, password: $password}) {
    accessToken
  }
}
`;

export const SIGN_UP = gql`
mutation SignUp($input: CreateUserInput){
  createUser(user: $input){
    id
		username
  }
}
`;

export const POST_REVIEW = gql`
mutation PostReview($input: CreateReviewInput){
  createReview(review: $input){
    repositoryId
  }
}
`;

export const DELETE_REVIEW = gql`
mutation DeleteReview($id: ID!){
  deleteReview(id: $id)
}
`;