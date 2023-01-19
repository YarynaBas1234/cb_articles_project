import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import './style.scss';
import { ArrowLeftIcon } from '../../assets/icons';
import { getArticleByID } from '../../redux/articles/articlesService';

const ArticlePage = () => {
	const dispatch = useAppDispatch();
	const article = useAppSelector((state) => state.articles.articleByID);

	const { id } = useParams();

	useEffect(() => {
		id && dispatch(getArticleByID(id));
	}, [dispatch, id]);

	return (
		<Grid container alignItems='stretch'>
			<Grid container justifyContent='center'>
				<img
					src={article?.imageUrl}
					className='background-image'
					width='100%'
					height='245px'
					alt={article?.title}
				/>
				<Box className='article-page-wrapper'>
					<Typography variant='h1' className='article-title'>
						{article?.title}
					</Typography>
					<Typography variant='body1' className='article-summary'>
						{article?.summary}
					</Typography>
				</Box>
			</Grid>
			<Grid container alignItems='center' className='back-link-wrapper'>
				<ArrowLeftIcon />
				<Link to='/' className='back-link'>
					Back to homepage
				</Link>
			</Grid>
		</Grid>
	);
};

export default ArticlePage;
