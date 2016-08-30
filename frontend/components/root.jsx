import React from 'react';
import { Provider } from 'react-redux';


export const Root = ({store}) => (
  <Provider store={store}>
    <h1>Hello World!</h1>
  </Provider>
);
