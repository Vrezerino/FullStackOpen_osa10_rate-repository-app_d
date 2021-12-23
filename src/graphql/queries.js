import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql`
query getRepo($id: ID!, $first: Int, $after: String) {
  repository(id: $id) {
		id
		name
    fullName
		ownerName
  	ownerAvatarUrl
    url
    description
    language
    stargazersCount
    reviewCount
    forksCount
    watchersCount
		ratingAverage
		reviews(first: $first, after: $after) {
			edges {
				node {
					id
					text
					rating
					createdAt
					user {
						id
						username
					}
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
  }
}
`;

export const GET_REPOSITORIES = gql`
query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
    edges {
      node {
        fullName,
        id,
        ownerName,
        ownerAvatarUrl,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage,
        description,
        language
      }
			cursor
    }
		pageInfo {
			endCursor
			startCursor
			hasNextPage
		}
  }
}
`;

export const GET_AUTHORIZED_USER = gql`
query getAuthorizedUser($includeReviews: Boolean!) {
	authorizedUser {
		id
		username
		reviews @include(if: $includeReviews) {
			edges {
				node {
					id
					text
					rating
					createdAt
					repository {
						id
						fullName
					}
					user {
						id
						username
					}
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
}
`;