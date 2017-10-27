import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './components/About';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
		<Route path='/products' component={Products}/>
		<Route path='/cart' component={Cart}/>
		<Route path='/about' component={About}/>
		
	</Switch>
	)