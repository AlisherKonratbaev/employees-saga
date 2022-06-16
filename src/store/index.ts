import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import jobsReducer from "./jobs";
import {rootSaga} from "../sagas";
import {connectRouter, routerMiddleware} from "connected-react-router"
import {createBrowserHistory, History} from "history";


export const history:History = createBrowserHistory() as History;

const rootReducer = combineReducers({
    jobs: jobsReducer,
    router: connectRouter(history)
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history as History)
        )
    ));

sagaMiddleware.run(rootSaga);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
