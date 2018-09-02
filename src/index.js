import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Hello from './components/hello';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello firstName="Chuck" lastName="Doyle"/>, document.getElementById('root') );
registerServiceWorker();
