import { StyleSheet } from 'react-native';
import theme from './theme';

export const repositoryItemtyles = StyleSheet.create({
	flexContainer: {
		padding: theme.padding.basic,
		flexDirection: 'row',
		backgroundColor: '#FFF',
		fontSize: theme.fontSizes.body
	},
	secondaryText: {
		width: '80%',
		color: theme.colors.textSecondary
	},
	basicInfo: {
		flexDirection: 'column',
		paddingLeft: theme.padding.basic,
		width: '100%',
		alignItems: 'flex-start'
	},
	avatar: {
		borderRadius: 5,
		width: 90,
		height: 90
	},
	heading: {
		fontWeight: theme.fontWeights.bold,
		fontSize: theme.fontSizes.subheading
	},
	language: {
		color: 'white',
		backgroundColor: theme.colors.primary,
		padding: theme.padding.basic / 3,
		borderRadius: 5
	},
	stats: {
		width: '100%',
		flexGrow: 1
	},
	button: {
		padding: theme.padding.basic,
		backgroundColor: 'red',
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		color: 'white',
		borderRadius: 5,
		textAlign: 'center',
	}
});

export const reviewItemStyles = StyleSheet.create({
	separator: {
		height: 10,
	},
	list: {
		height: '89%' // Needed in order to render the last FlatList item correctly which is a bummer
	},
	loading: {
		backgroundColor: 'white',
	},
	noReviews: {
		backgroundColor: '#FFF',
		textAlign: 'center'
	},
	flexContainer: {
		padding: theme.padding.basic,
		flexDirection: 'row',
		backgroundColor: '#FFF',
		fontSize: theme.fontSizes.body
	},
	reviewText: {
		width: '84%'
	},
	rating: {
		paddingTop: 16,
		textAlign: 'center',
		width: 70,
		height: 70,
		borderWidth: 3,
		borderRadius: 35,
		borderColor: theme.colors.primary,
		fontSize: theme.fontSizes.big,
		fontWeight: theme.fontWeights.bold,
		color: theme.colors.primary,
	},
	secondaryText: {
		width: '80%',
		color: theme.colors.textSecondary
	},
	reviewBox: {
		flexDirection: 'column',
		paddingLeft: theme.padding.basic,
		width: '100%'
	},
	heading: {
		fontWeight: theme.fontWeights.bold,
		fontSize: theme.fontSizes.subheading
	},
	avatar: {
		borderRadius: 5,
		width: 90,
		height: 90
	},
});

export const postReviewStyles = StyleSheet.create({
	view: {
		padding: theme.padding.basic,
		backgroundColor: 'white'
	},
	button: {
		padding: theme.padding.basic,
		backgroundColor: 'red',
		fontSize: theme.fontSizes.subheading,
		fontWeight: theme.fontWeights.bold,
		color: 'white',
		borderRadius: 5,
		textAlign: 'center'
	}
});

export const reviewControlsStyles = StyleSheet.create({
	flexContainer: {
		padding: theme.padding.basic,
		justifyContent: 'space-around',
		flexDirection: 'row',
		backgroundColor: '#FFF',
		fontSize: theme.fontSizes.body
	}
});

export const pickerStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: 'purple',
		borderRadius: 8,
		color: 'black',
		paddingRight: 30
	}
});