import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight * 2,
		paddingRight: theme.padding.basic,
		paddingBottom: theme.padding.basic,
		backgroundColor: theme.colors.appbar,
		flexDirection: 'row',
	},
	tab: {
		paddingLeft: theme.padding.basic,
		color: 'white',
		fontSize: theme.fontSizes.big,
		fontWeight: theme.fontWeights.bold,
	}
});

const AppBar = ({ user }) => {
	const { signOut } = useSignOut();

	return (
		<View style={styles.container}>
			<ScrollView horizontal>

				<Pressable>
					<Link to='/'>
						<Text style={styles.tab}>
							Repositories
						</Text>
					</Link>
				</Pressable>

				{user
					? <>
						<Pressable>
							<Link to='/myreviews'>
								<Text style={styles.tab}>
									My Reviews
								</Text>
							</Link>
						</Pressable>

						<Pressable onPress={signOut}>
							<Text style={styles.tab}>
								Sign Out
							</Text>
						</Pressable>
					</>

					: <>
						<Pressable>
							<Link to='/signin'>
								<Text style={styles.tab}>
									Sign In
								</Text>
							</Link>
						</Pressable>

						<Pressable>
							<Link to='/signup'>
								<Text style={styles.tab}>
									Sign Up
								</Text>
							</Link>
						</Pressable>
					</>
				}
			</ScrollView>
		</View>
	);
};

export default AppBar;