
import {takeEvery, fork, put, call, take, spawn} from 'redux-saga/effects'
import {fetchJobs, fetchEmployees} from "../api";
import {setJobsAction, setLoadingJobsAction, setEmployeesAction, setLoadingEmployeesAction, SET_EMPLOYEES, GET_JOBS} from '../store/actions'
import {IJob, IGetEmployee, IEmployees} from "../types";

function* getJobs() {
    yield put(setLoadingJobsAction(true))
    try{
        const data: IJob[] = yield call(fetchJobs);
        yield put(setJobsAction(data))
    }
    catch {
        console.log("error")
    }
    yield put(setLoadingJobsAction(false))
}


function* getEmployeesByJobs(action:IGetEmployee) {
    yield put(setLoadingEmployeesAction(true))
    try{
        const data: IEmployees[] = yield call(fetchEmployees, action.payload);
        yield put(setEmployeesAction(data))
    }
    catch {
        console.log("error")
    }
    yield put(setLoadingEmployeesAction(false))
}

function* watchGetEmployees() {
    yield takeEvery(SET_EMPLOYEES, getEmployeesByJobs)
}

function* watchGetJobs() {
    yield takeEvery(GET_JOBS, getJobs)
}

export function* rootSaga() {
    yield fork(watchGetJobs);
    yield fork(watchGetEmployees);
}