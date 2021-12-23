import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sort, search) => {
	let variables = {};

	switch (sort) {
		case 'highest':
			variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', searchKeyword: search, first: 8 };
			break;
		case 'lowest':
			variables = { orderBy: "RATING_AVERAGE", orderDirection: 'ASC', searchKeyword: search, first: 8 };
			break;
		default:
			variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: search, first: 8 };
	}

	const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network', variables
	});

	const doFetchMore = () => {
		const canFetchMore = !loading && data && data?.repositories.pageInfo.hasNextPage;
		if (!canFetchMore) return;

		fetchMore({
			query: GET_REPOSITORIES,
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...variables,
			},
		});
	};

	return { 
		repositories: data?.repositories, 
		doFetchMore, 
		loading };
};

export default useRepositories;