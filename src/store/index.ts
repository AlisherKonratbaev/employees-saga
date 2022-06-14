
import { combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import jobsReducer from "./jobs";
import {rootSaga} from "../sagas";

const rootReducer = combineReducers({
    jobs:jobsReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            sagaMiddleware,
        )
    ));

sagaMiddleware.run(rootSaga);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
