import React from 'react';
import { ItemSeparator } from '../ItemSeparator';
import { View, FlatList, ActivityIndicator} from 'react-native';
import ReviewItem from '../ReviewItem';
import Text from '../Text';
import { reviewItemStyles as styles } from '../../styles';

import useAuthorizedUser from '../../hooks/useAuthorizedUser';

const MyReviews = () => {
	const { authorizedUser, loading, doFetchMore } = useAuthorizedUser(true);
	const reviews = authorizedUser?.reviews?.edges;

	const onEndReached = () => {
		doFetchMore();
	};

	return authorizedUser && !loading
		? (authorizedUser?.reviews?.edges.length > 0
			?
			<View style={styles.list}>
				<FlatList
					data={reviews}
					renderItem={({ item }) => <ReviewItem review={item} authorizedUser={authorizedUser} onMyReviews={true}/>}
					keyExtractor={(item) => item.node.id}
					ItemSeparatorComponent={ItemSeparator}
					onEndReached={onEndReached}
					onEndReachedThreshold={0.5} />
			</View>
			:
			<View>
				<Text style={styles.noReviews}>No reviews yet. Leave one!</Text>
			</View>
		) :
		<View>
			<View style={styles.loading}>
				<ActivityIndicator size='large' color='red' />
			</View>
		</View>;
};

export default MyReviews;