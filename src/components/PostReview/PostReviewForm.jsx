import React from 'react';
import { View, Pressable } from 'react-native';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import { postReviewStyles as styles } from '../../styles';

const PostReviewForm = ({ onSubmit }) => {
	return (
		<View style={styles.view}>
			<View>
				<FormikTextInput
					testID='rating'
					name='rating'
					placeholder='Rating (0-100)' />
				<FormikTextInput
					testID='review'
					name='review'
					placeholder='Write your review here'
					multiline={true} />
			</View>
			<View>
				<Pressable
					onPress={onSubmit}>
					<Text testID='postReviewBtn' style={styles.button}>
						Post a Review!
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default PostReviewForm;