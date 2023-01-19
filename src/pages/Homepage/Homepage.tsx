import React, { useEffect, useState, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';

import { fetchArticles } from '../../redux/articles/articlesService';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Article } from '../../interfaces/articles';
import ArticleComponent from '../../_components/ArticleComponent';
import SearchBar from '../../_components/common/SearchField';

import './style.scss';

const Homepage = () => {
	const dispatch = useAppDispatch();
	const articles = useAppSelector((state) => state.articles.list);

	const [searchQuery, setSearchQuery] = useState('');

	const filterData = (query: string, data: Article[]) => {
		if (!query) {
			return data;
		} else {
			const filterByTitle = data.filter(
				(article: Article) =>
					article.title.toLowerCase().includes(query) &&
					!article.summary.slice(0, 100).toLowerCase().includes(query)
			);

			const filterBySummary = data.filter(
				(article: Article) =>
					article.summary.slice(0, 100).toLowerCase().includes(query) &&
					!article.title.toLowerCase().includes(query)
			);

			const filterBoth = data.filter(
				(article: Article) =>
					article.title.toLowerCase().includes(query) &&
					article.summary.slice(0, 100).toLowerCase().includes(query)
			);

			return [...filterByTitle, ...filterBySummary, ...filterBoth];
		}
	};

	const insertMark = (text: string, searchQuery: string) => {
		const searchQueryLowerCase = searchQuery.toLowerCase();
		const parts = text.split(new RegExp(`(${searchQueryLowerCase})`, 'gi'));

		if (text.toLowerCase().indexOf(searchQueryLowerCase) !== -1 && searchQueryLowerCase !== '') {
			return (
				<>
					{parts.map((part: string, i: number) => {
						return part.toLowerCase() === searchQueryLowerCase.toLowerCase() ? (
							<span className='mark' key={i}>
								{part}
							</span>
						) : (
							part
						);
					})}
				</>
			);
		} else {
			return text;
		}
	};

	const dataFiltered = useMemo(() => filterData(searchQuery, articles), [searchQuery, articles]);

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	return (
		<Grid className='homepage-wrapper'>
			<SearchBar setSearchQuery={setSearchQuery} />
			<Typography variant='body2' className='results'>
				Results: {dataFiltered?.length}
			</Typography>
			<Grid container spacing={{ xs: '20px', md: '30px', lg: '45px' }}>
				{dataFiltered?.map((article: Article) => (
					<ArticleComponent
						article={article}
						searchQuery={searchQuery}
						insertMark={insertMark}
						key={article.id}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default Homepage;
