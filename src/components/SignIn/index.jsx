import { Formik } from 'formik';
import React from 'react';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useSignIn from '../../hooks/useSignIn';
import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, 'Minimum length is 3.')
		.required('Username is required.'),
	password: yup
		.string()
		.min(8, 'Minimum length is 8.')
		.required('Password is required.')
});

const SignIn = () => {
	let history = useHistory();
	const { signIn } = useSignIn();

	const onSubmit = async values => {
		const { username, password } = values;

		try {
			await signIn({ username, password });
			history.push('/');
		} catch (e) {
			Alert.alert(e.message);
		}
	};

	const initialValues = {
		username: '',
		password: ''
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;