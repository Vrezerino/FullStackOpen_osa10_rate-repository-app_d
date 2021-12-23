import { useMutation } from '@apollo/client';
import { POST_REVIEW, DELETE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useReview = () => {
	const [mutatePost] = useMutation(POST_REVIEW);
	const [mutateDelete] = useMutation(DELETE_REVIEW);
	const apolloClient = useApolloClient();

	const postReview = async ({ ownerName, repositoryName, rating, review }) => {
		const reviewResult = await mutatePost(
			{
				variables: {
					'input': {
						ownerName, repositoryName, 'rating': parseInt(rating), 'text': review
					}
				}
			}
		);
		apolloClient.resetStore();
		return reviewResult;
	};

	const deleteReview = async (id) => {
		const reviewResult = await mutateDelete(
			{
				variables: { id }
			}
		);
		apolloClient.resetStore();
		return reviewResult;
	};

	return { postReview, deleteReview };
};

export default useReview;