import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import {reducer} from "./redux/reducer";

import './index.css';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(
            thunk
        ),
        window?.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
