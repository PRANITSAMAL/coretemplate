import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import AnnualReport from './pages/Annual';
import Teams from './pages/Team';
import Blogs from './pages/Blogs';
import SignUp from './pages/Signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/events' element={<Events />} />
		<Route path='/annual' element={<AnnualReport />} />
		<Route path='/team' element={<Teams />} />
		<Route path='/blogs' element={<Blogs />} />
		<Route path='/sign-up' element={<SignUp />} />
	</Routes>
	</Router>
);
}

export default App;
