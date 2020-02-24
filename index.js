/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';

let store = createStore(allReducers);

const App = () => (
    <Provider store={store}>
        <TaskManagerComponent />
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
