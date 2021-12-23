import { Formik } from 'formik';
import React from 'react';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useReview from '../../hooks/useReview';
import PostReviewForm from './PostReviewForm';

const validationSchema = yup.object().shape({
	rating: yup.
		number()
		.min(0, 'Must be greater than 0!')
		.max(100, '100 is maximum value!')
		.required('Rating is required!'),
	review: yup
		.string()
		.required('Must not be empty.'),
});

const PostReview = ({ item }) => {
	let history = useHistory();
	const { postReview } = useReview();

	const onSubmit = async values => {
		const { rating, review } = values;

		try {
			const result = await postReview(
				{
					ownerName: item.ownerName,
					repositoryName: item.name,
					rating,
					review
				});
			history.push(`/repositories/${result.data.createReview.repositoryId}`);
		} catch (e) {
			Alert.alert(e.message);
		}
	};

	const initialValues = {
		rating: '',
		review: ''
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{({ handleSubmit }) => <PostReviewForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default PostReview;