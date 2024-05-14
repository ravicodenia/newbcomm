import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../src/assets/css/style.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
			<ToastContainer /> 
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
