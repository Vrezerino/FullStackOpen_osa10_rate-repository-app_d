import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';
import { useHistory } from 'react-router-native';

const RepositoryList = () => {
	const [sort, setSort] = useState('latest');
	const [search, setSearch] = useState('');
	const [searchDebounced] = useDebounce(search, 500, { maxWait: 1000 });
	const { repositories, doFetchMore, loading } = useRepositories(sort, searchDebounced);
	const onEndReached = () => doFetchMore();
	const h = useHistory();
	/*
	useEffect(() => {
		if (!search) {
			fn.flush;
		}
	}, [search]);
	*/

	return (
		<RepositoryListContainer
			repositories={repositories}
			sort={sort}
			setSort={setSort}
			search={search}
			setSearch={setSearch}
			onEndReached={onEndReached}
			history={h}
			loading={loading} />
	);
};

export default RepositoryList;