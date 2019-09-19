import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleare = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleare];

const store = createStore(rootReducer, middlewares);

sagaMiddleare.run(rootSaga);

export default store;
