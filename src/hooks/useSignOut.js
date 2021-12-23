import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signOut = () => {
		authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return { signOut };
};

export default useSignIn;