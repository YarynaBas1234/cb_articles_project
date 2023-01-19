import { toast } from 'react-toastify';

import { IDefaultAPIResponse } from '../interfaces/common';

const _showError = (str: string) => {
	toast.error(`Error: ${str}`);
};

export const _handleSuccessResponse = (res: IDefaultAPIResponse): IDefaultAPIResponse => {
	return {
		data: res.data,
		status: res.status,
	};
};

export const _handleFailedRequest = ({ response }: { response: IDefaultAPIResponse }) => {
	if (response?.data) {
		_showError(response.data)

		return { data: response.data, status: response.status };
	}
	return { data: null, status: 400 };
};
