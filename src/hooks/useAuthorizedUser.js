import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useAuthorizedUser = includeReviews => {
	const variables = { includeReviews };
	const { data, fetchMore, loading } = useQuery(GET_AUTHORIZED_USER, {
		variables,
		fetchPolicy: 'cache-and-network',
		onError: (e) => {
			console.error(e.message);
		}
	});

	const doFetchMore = () => {
		const canFetchMore = !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;
		if (!canFetchMore) return;

		fetchMore({
			query: GET_AUTHORIZED_USER,
			variables: {
				after: data.authorizedUser.reviews.pageInfo.endCursor,
				...variables,
			}
		});
	};

	return { authorizedUser: data?.authorizedUser, loading, doFetchMore };
};

export default useAuthorizedUser;