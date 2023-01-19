import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../../interfaces/articles';

import { fetchArticlesApi, getArticleByIDApi } from './articlesAPI';

export const fetchArticles = createAsyncThunk<Article[], undefined, { rejectValue: string }>(
	'articles/fetchArticles',
	async function () {
		const response = await fetchArticlesApi();
		
		if (response.status === 200) return response.data;
	}
);

export const getArticleByID = createAsyncThunk<Article, string, { rejectValue: string }>(
	'articles/getArticleByID',
	async function (id) {
		const response = await getArticleByIDApi(id);

		if (response.status === 200) return response.data;
	}
);
