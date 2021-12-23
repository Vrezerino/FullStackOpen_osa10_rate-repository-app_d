import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useSignUp = () => {
	const [mutate] = useMutation(SIGN_UP);
	const apolloClient = useApolloClient();

	const signUp = async ({ username, password }) => {
		const signUpResult = await mutate(
			{
				variables: {
					input: {
						username, password
					}
				}
			}
		);
		apolloClient.resetStore();
		return signUpResult;
	};

	return { signUp };
};

export default useSignUp;