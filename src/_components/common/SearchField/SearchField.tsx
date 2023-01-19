import React from 'react';
import { TextField, Typography, InputAdornment, FormControl } from '@mui/material';

import { SearchIcon } from '../../../assets/icons';

import './style.scss';

interface SearchBarProps {
	setSearchQuery: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const { setSearchQuery } = props;

	return (
		<FormControl className='search-wrapper form-wrapper'>
			<Typography variant='body2' className='title'>
				Filter by keywords
			</Typography>
			<TextField
				className='text'
				onInput={(e) => {
					setSearchQuery((e.target as HTMLInputElement).value);
				}}
				variant='outlined'
				placeholder='The most successful IT companies in 2020'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</FormControl>
	);
};

export default SearchBar;
