import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// setting up redux STORE and linking reducers to the highest component
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={myStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
