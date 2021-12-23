import React from 'react';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';
import PostReview from '../PostReview';
import ReviewItem from '../ReviewItem';
import ItemSeparator from '../ItemSeparator';

import { View, FlatList, ActivityIndicator } from 'react-native';
import Text from '../Text';
import { reviewItemStyles as styles } from '../../styles';

const RepoInfo = ({ repo }) => {
	return (
		<>
			<RepositoryItem
				key={repo?.id}
				single={true}
				item={repo} />
			<ItemSeparator />
		</>
	);
};

const RepositoryView = ({ user }) => {
	const { id } = useParams();
	const { repo, loading, doFetchMore } = useRepository(id);
	const reversedReviews = repo?.reviews?.edges?.slice().reverse();

	const onEndReached = () => {
		doFetchMore();
	};


	return repo && !loading
		? (repo?.reviews?.edges.length > 0
			?
			<View style={styles.list}>
				<FlatList
					data={reversedReviews}
					renderItem={({ item }) => <ReviewItem review={item} onMyReviews={false} authorizedUser={user}/>}
					keyExtractor={(item) => item.node.id}
					ListHeaderComponent={() => <RepoInfo repo={repo} />}
					ItemSeparatorComponent={ItemSeparator}
					onEndReached={onEndReached}
					onEndReachedThreshold={0.1} />
				{user && <PostReview item={repo} />}
			</View>
			:
			<View>
				<RepoInfo repo={repo} />
				<Text style={styles.noReviews}>No reviews yet. Leave one!</Text>
				{user && <PostReview item={repo} />}
			</View>
		) :
		<View>
			<View style={styles.loading}>
				<ActivityIndicator size='large' color='red' />
			</View>
		</View>;
};

export default RepositoryView;