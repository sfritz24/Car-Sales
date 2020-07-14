import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer/reducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);



//Normal function

// functin name(numOne, numTwo) {
//     return numOne + numTwo
// }

// name(1, 2)



//Arrow function

//const name = (numOne, numTwo) =>{
    //return numOne + numTwo
//}

//console.log(name)

//function newFunc(name(3, 5)) {
    //return name
//}

//newFunc()