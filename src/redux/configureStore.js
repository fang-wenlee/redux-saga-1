import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleWare));

sagaMiddleware.run(watcherSaga);

export default store;
