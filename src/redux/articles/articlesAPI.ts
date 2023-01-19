import axios from 'axios';

import { API_URL } from '../../constants';
import { _handleSuccessResponse, _handleFailedRequest } from '../../helpers';

export const fetchArticlesApi = async () => {
	return axios(`${API_URL}/articles`).then(_handleSuccessResponse).catch(_handleFailedRequest);
};

export const getArticleByIDApi = async (id: string) => {
	return axios(`${API_URL}/articles/${id}`)
		.then(_handleSuccessResponse)
		.catch(_handleFailedRequest);
};
