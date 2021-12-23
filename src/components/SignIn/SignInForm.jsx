import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
	view: {
		padding: theme.padding.basic,
		backgroundColor: 'white'
	},
	button: {
		padding: theme.padding.basic,
		backgroundColor: 'red',
		fontSize: theme.fontSizes.body,
		color: 'white',
		borderRadius: 5,
		textAlign: 'center'
	}
});

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.view}>
			<View>
				<FormikTextInput
					testID='username'
					name='username'
					placeholder='Username' />
				<FormikTextInput
					testID='password'
					secureTextEntry
					name='password'
					placeholder='Password' />
			</View>
			<View>
				<Pressable
					onPress={onSubmit}>
					<Text testID='signInBtn' style={styles.button}>
						Sign In
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default SignInForm;