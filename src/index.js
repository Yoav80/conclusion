import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.component';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.style.css';


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
