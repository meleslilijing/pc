// es6 各浏览器兼容
import 'babel-polyfill'

import './js/global'

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'

// 注意，不要直接这样做，要区分开发环境和生产环境
import DevTools from './js/containers/DevTools';

import Store from './js/store'
import App from './js/containers/App'
import Foo from './js/components/Foo'
import Bar from './js/components/Bar'

class Root extends Component {
	render() {
    return (
		<div>
  		<Provider store={Store}>
  			<ReduxRouter>
  				<Route path="/" component={App}>
  					<Route path="foo" component={Foo}></Route>
  					<Route path="bar" component={Bar}></Route>
  				</Route>
  			</ReduxRouter>
      </Provider>
      <DevTools />
		</div>
    );
  }
}

var env = process.env.NODE_ENV

/**
 * /
 * /index
 * /bill
 * /faq
 * /business_rules
 * /promotion
 */

ReactDom.render(
	<Root />,
	document.getElementById('root')
)


