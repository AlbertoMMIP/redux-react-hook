import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const index = () => ({
  ...createStore(reducers, applyMiddleware(thunk))
})

export default index;
