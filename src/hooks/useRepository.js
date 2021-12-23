import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = id => {
	const variables = { id, 'first': 8 };
	const { data, fetchMore, loading } = useQuery(GET_REPOSITORY, {
		variables,
		fetchPolicy: 'cache-and-network',
		onError: (e) => {
			console.error(e.message);
		}
	});

	const doFetchMore = () => {
		const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;
		if (!canFetchMore) return;

		fetchMore({
			query: GET_REPOSITORY,
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables,
			}
		});
	};

	return { repo: data?.repository, loading, doFetchMore };
};

export default useRepository;