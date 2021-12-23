import React from 'react';
import { Image, View, Pressable, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { repositoryItemtyles as styles } from '../../styles';
import * as Linking from 'expo-linking';

const RepositoryItem = ({ item, single }) => {
	return (
		<View>
			<View style={styles.flexContainer}>
				<Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
				<View testID='basicInfo' style={styles.basicInfo}>
					<Text testID='fullName' style={styles.heading}>{item.fullName}</Text>
					<Text testID='description' style={styles.secondaryText}>{item.description}</Text>
					<Text testID='language' style={styles.language}>{item.language}</Text>
				</View>
			</View >
			<RepositoryItemStats item={item} />
			{single &&
				<View>
					<Pressable
						style={{ ...styles.flexContainer, flexDirection: 'column' }}
						onPress={() => Linking.openURL(item.url)}>
						<Text testID='openGitHub' style={styles.button}>
							Open in GitHub
						</Text>
					</Pressable>
				</View>}
		</View>
	);
};

const RepositoryItemStats = ({ item }) => {
	const statsStyles = StyleSheet.create({
		flexContainer: {
			padding: theme.padding.basic,
			flexDirection: 'row',
			backgroundColor: '#FFF',
			fontSize: theme.fontSizes.body
		},
		heading: {
			fontWeight: theme.fontWeights.bold,
			fontSize: theme.fontSizes.subheading
		},
		secondaryText: {
			color: theme.colors.textSecondary
		}
	});

	const formatCount = count => (
		count >= 1000 ? `${Math.round(count / 1000 * 10) / 10}k` : count
	);


	return (
		<View style={{ ...statsStyles.flexContainer, justifyContent: 'space-around' }}>
			<View testID='stargazersCount'>
				<Text style={statsStyles.heading}>{formatCount(item.stargazersCount)}</Text>
				<Text style={statsStyles.secondaryText}>Stars</Text>
			</View>
			<View testID='forksCount'>
				<Text style={statsStyles.heading}>{formatCount(item.forksCount)}</Text>
				<Text style={statsStyles.secondaryText}>Forks</Text>
			</View>
			<View testID='reviewCount'>
				<Text style={statsStyles.heading}>{formatCount(item.reviewCount)}</Text>
				<Text style={statsStyles.secondaryText}>Reviews</Text>
			</View>
			<View testID='ratingAverage'>
				<Text style={statsStyles.heading}> {formatCount(item.ratingAverage)}</Text>
				<Text style={statsStyles.secondaryText}>Rating</Text>
			</View>
		</View>
	);
};

export default RepositoryItem;