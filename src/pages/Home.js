import React from 'react';
import HomeSlider from '../components/HomeSlider';

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Center',
		height: '100vh'
	}}
	>
		<HomeSlider />
	<h1>Welcome to GeeksforGeeks</h1>
	</div>
);
};

export default Home;
