import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import theme from '../theme';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryList/RepositoryView';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

import useAuthorizedUser from '../hooks/useAuthorizedUser';

//import { useQuery } from '@apollo/client';
//import { GET_AUTHORIZED_USER } from '../graphql/queries';



const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.backgroundMain,
		//flexGrow: 1,
		//flexShrink: 1,
	},
});

const Main = () => {
	const { authorizedUser } = useAuthorizedUser(false);
	return (
		<View style={styles.container}>
			<AppBar user={authorizedUser} />
			<Switch>
				<Route exact path='/'>
					<RepositoryList />
				</Route>
				<Route path='/repositories/:id'>
					<RepositoryView user={authorizedUser} />
				</Route>
				<Route exact path='/signin'>
					<SignIn />
				</Route>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/myreviews'>
					<MyReviews user={authorizedUser}/>
				</Route>
				<Redirect to="/" />
			</Switch>
		</View>
	);
};

export default Main;