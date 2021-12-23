import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import SignInForm from '../components/SignIn/SignInForm';
import { Formik } from 'formik';

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			const onSubmit = jest.fn();
			const initialValues={ username: '', password: '' };

			const { getByTestId } = render(
				<Formik initialValues={initialValues} onSubmit={onSubmit}>
					{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
				</Formik>
			);

			fireEvent.changeText(getByTestId('username'), 'kalle');
			fireEvent.changeText(getByTestId('password'), 'password');
			fireEvent.press(getByTestId('signInBtn'));

			await waitFor(() => {
				expect(onSubmit).toHaveBeenCalledTimes(1);
				console.log(onSubmit.mock.calls[0][0]);
				expect(onSubmit.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				});
			});
		});
	});
});