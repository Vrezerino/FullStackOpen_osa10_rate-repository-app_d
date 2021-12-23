import React from 'react';
import { View, FlatList, Pressable, ActivityIndicator } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { reviewItemStyles as listStyles } from '../../styles';
import { pickerStyles } from '../../styles';

import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import ItemSeparator from '../ItemSeparator';

export class RepositoryListContainer extends React.Component {
	renderHeader = () => {
		const props = this.props;
		const onChangeSearch = query => props.setSearch(query);
		return (
			<>
				<Picker
					onValueChange={(value) => props.setSort(value)}
					value={props.sort}
					style={pickerStyles}>
					<Picker.Item label='Latest' value='latest' />
					<Picker.Item label='Highest' value='highest' />
					<Picker.Item label='Lowest' value='lowest' />
				</Picker>
				<Searchbar
					placeholder="Search"
					onChangeText={onChangeSearch}
					value={props.search}
				/>
			</>
		);
	};

	render() {
		const props = this.props;
		const repositoryNodes = props.repositories
			? props.repositories.edges?.map(edge => edge.node)
			: [];

		const renderItem = ({ item }) => (
			<Pressable onPress={() => props.history.push(`/repositories/${item.id}`)}>
				<RepositoryItem item={item} />
			</Pressable>
		);

		return (
			<View style={listStyles.list}>
				<FlatList
					ListHeaderComponent={this.renderHeader}
					data={repositoryNodes}
					ItemSeparatorComponent={ItemSeparator}
					renderItem={renderItem}
					onEndReached={props.onEndReached}
					onEndReachedThreshold={0} />
				{props.loading && <ActivityIndicator size='large' color='red' />}
			</View>
		);
	}
}

export default RepositoryListContainer;