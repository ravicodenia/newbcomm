import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";

import Signup from "./components/Singup";
import Login from "./components/Login";
import Footer from "./components/footer";

import Header from "./components/Header";



import GlobalFooter from "./components/footer/globalFooter";
import Home from "./components/Home/App";

const Routing = () => {
	const user = localStorage.getItem("token");

	const user1 = localStorage.getItem('token1');
	return ( 
		<Routes>
			{user && <Route path="/" exact element={<Login />} />}
			<Route path="/login" exact element={<Login />} />
			// <Route path="/signup" exact element={<Signup />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/home" exact element={<Home />} />

		</Routes>
	);
}

const App = () => {
	return (
		<>
			
			<Routing />
			
			<GlobalFooter />

		</>
	);
}

export default App;
