import { createSlice } from '@reduxjs/toolkit';

import { Article } from '../../interfaces/articles';

import { fetchArticles, getArticleByID } from './articlesService';

type ArticlesState = {
	list: Article[];
	articleByID?: Article;
	loading: boolean;
	error: string | null;
};

const initialState: ArticlesState = {
	list: [],
	articleByID: {} as Article,
	loading: false,
	error: null,
};

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload;
			})

			.addCase(getArticleByID.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getArticleByID.fulfilled, (state, action) => {
				state.loading = false;
				state.articleByID = action.payload;
			});
	},
});

export default articlesSlice.reducer;
