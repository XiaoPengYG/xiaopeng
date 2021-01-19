import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {BrowserRouter, Route} from "react-router-dom";
import UserList from "./components/PetList";

ReactDOM.render((
        <BrowserRouter>
            <div className="container">
                <Route path="/"  exact component={PetList} />
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
