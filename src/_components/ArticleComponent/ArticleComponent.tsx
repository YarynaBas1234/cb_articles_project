import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';

import { Article } from '../../interfaces/articles';
import { CalendarIcon, ArrowRightIcon } from '../../assets/icons';

import './style.scss';

interface ArticleComponentProps {
	article: Article;
	searchQuery: string;
	insertMark: (text: string, searchQuery: string) => JSX.Element | string;
}

const ArticleComponent: React.FC<ArticleComponentProps> = (props) => {
	const { article, searchQuery, insertMark } = props;

	return (
		<Grid item lg={4} md={6} sm={6} xs={12} key={article.id}>
			<Grid className='article-wrapper'>
				<img className='article-image' src={article.imageUrl} width='100%' height='217px' alt={article.title} />
				<Grid
					container
					direction='column'
					justifyContent='space-between'
					className='article-description-wrapper'>
					<Box>
						<Grid container alignItems='center'>
							<CalendarIcon />
							<Typography variant='body2' className='published-date'>
								{format(new Date(article.publishedAt), 'MMMM do, yyyy')}
							</Typography>
						</Grid>
						<Typography variant='h1' className='title'>
							{insertMark(article.title, searchQuery)}
						</Typography>
						<Typography variant='body2' className='summary'>
							{insertMark(article.summary.slice(0, 100), searchQuery)}...
						</Typography>
					</Box>
					<Box>
						<Grid container alignItems='center' className='read-more-wrapper'>
							<Link
								to={`/article/${article.id}`}
								state={{ article: article, id: article.id }}
								className='read-more'>
								Read More
							</Link>
							<ArrowRightIcon />
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ArticleComponent;
