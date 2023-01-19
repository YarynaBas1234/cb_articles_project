import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import './assets/scss/index.scss';
import ArticlePage from './pages/ArticlePage';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='article/:id' element={<ArticlePage />}></Route>
			</Routes>

			<ToastContainer
				position='top-right'
				theme={'colored'}
				autoClose={5000}
				hideProgressBar
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				limit={5}
			/>
		</>
	);
};

export default App;
