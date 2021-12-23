import React from 'react';
import { View, Alert, Pressable } from 'react-native';
import Text from './Text';
import {
	reviewItemStyles as styles,
	reviewControlsStyles,
	postReviewStyles as styles2
} from '../styles';

import useReview from '../hooks/useReview';
import { useHistory } from 'react-router-native';

const ReviewItem = ({ review, authorizedUser, onMyReviews }) => {
	const { deleteReview } = useReview();
	const history = useHistory();

	const doDelete = () => {
		const reviewTextPeak = review.node.text.length > 25
			? `${review.node.text.substring(0, 24)}...`
			: review.node.text;

		Alert.alert(
			'Delete review',
			`Are you sure you want to delete review '${reviewTextPeak}'?`, [{
				text: 'Yes',
				onPress: async () => {
					try {
						await deleteReview(review.node.id);
						onMyReviews && history.push('/myreviews');
					} catch (e) {
						Alert.alert(e.message);
					}
				}
			},
			{
				text: 'No',
				style: 'cancel'
			}]
		);
	};

	return (<>
		<View>
			<View style={styles.flexContainer}>
				<View>
					<Text style={styles.rating}>{review.node.rating}</Text>
				</View>
				<View style={styles.reviewBox}>
					<Text style={styles.heading}>{review.node.user.username}</Text>
					<Text style={styles.secondaryText}>{new Date(review.node.createdAt).toDateString()}</Text>
					<View style={styles.reviewText}>
						<Text>{review.node.text}</Text>
					</View>
				</View>
			</View>
		</View>

		<View style={reviewControlsStyles.flexContainer}>
			{onMyReviews && (
				<Pressable onPress={() => history.push(`/repositories/${review.node.repository.id}`)}>
					<Text style={{ ...styles2.button, backgroundColor: 'maroon' }}>
						View repository
					</Text>
				</Pressable>
			)}

			{(authorizedUser?.id === review.node.user.id) && (
				<Pressable onPress={doDelete}>
					<Text style={styles2.button}>
						Delete review
					</Text>
				</Pressable>
			)}

		</View></>
	);
};

export default ReviewItem;