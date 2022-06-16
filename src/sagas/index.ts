import {LOCATION_CHANGE} from "connected-react-router";
import {takeEvery, fork, put, call, take} from 'redux-saga/effects'
import {fetchJobs} from "../api";
import {setJobsAction, setLoadingAction} from "../store/actions";
import {IJob} from "../types";

function* getJobs() {
    yield put(setLoadingAction(true))
    try{
        const data: IJob[] = yield call(fetchJobs);
        yield put(setJobsAction(data))
    }
    catch {
        console.log("error")
    }
    yield put(setLoadingAction(false))
}

function* watchJobs() {
    yield fork(getJobs)
}

export function* rootSaga() {
    yield takeEvery(LOCATION_CHANGE, watchJobs)
}