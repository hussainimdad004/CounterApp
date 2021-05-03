import React from 'react';
import reducers from './Redux/reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Counter from './Counter';

export default class App extends React.Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store} >
                <Counter/>
            </Provider>
        );
    }
}
