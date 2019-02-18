import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import RecipeList from './Components/Recipes/RecipeList'
import ListRecipes from './Components/Recipes/ListRecipes'

ReactDOM.render(<RecipeList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();