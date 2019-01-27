import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';


import MainAppNavigator from './components/MainAppNavigator';
import reducer from './store/reducer';

const store = createStore(reducer, applyMiddleware(reduxThunk));


class MainApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainAppNavigator />
            </Provider>
        )
    }
};
export default MainApp;
