import { SET_JOBS, SET_LOADING_JOBS, SET_EMPLOYEES, SET_LOADING_EMPLOYEES, GET_EMPLOYEES, GET_JOBS } from './store/actions';

export type IJob = {
    id: number,
    jobId: string,
    title: string,
}

export interface ISetJobsAction {
    type: typeof SET_JOBS,
    payload: IJob[]
}
export interface ISetLoadingJobs {
    type: typeof SET_LOADING_JOBS,
    payload: boolean,
}
export interface IGetJobs{
    type: typeof GET_JOBS,
}

export type IEmployees = {
    id:string,
    createdAt: string,
    avatar: string,
    name: string,
    email: string,
    companyName: string,
    address: string,
    phone: string,
    job: string,
    about: string,
}

export interface ISetEmployeesAction {
    type: typeof SET_EMPLOYEES,
    payload: IEmployees[]
}
export interface ISetLoadingEmployee{
    type: typeof SET_LOADING_EMPLOYEES,
    payload: boolean,
}

export interface IGetEmployee{
    type: typeof GET_EMPLOYEES,
    payload: string,
}
