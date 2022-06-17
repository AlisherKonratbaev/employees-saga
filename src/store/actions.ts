import {ISetJobsAction, IJob, IEmployees, ISetEmployeesAction, ISetLoadingEmployee, IGetEmployeeAction, IGetJobs} from "../types";

export const SET_JOBS = "SET_JOBS";
export const SET_LOADING_JOBS = "SET_LOADING_JOBS";
export const GET_JOBS = "GET_JOBS";

export const SET_EMPLOYEES = "SET_EMPLOYEES"
export const SET_LOADING_EMPLOYEES = "SET_LOADING_EMPLOYEES"
export const GET_EMPLOYEES = "GET_EMPLOYEES";

export const setJobsAction = (payload:IJob[]):ISetJobsAction => ({type:SET_JOBS, payload})
export const setLoadingJobsAction = (payload:boolean) => ({type: SET_LOADING_JOBS, payload});
export const getJobsAction = ():IGetJobs => ({type:GET_JOBS})

export const getEmployeesAction = (payload: string):IGetEmployeeAction =>({type:GET_EMPLOYEES, payload})
export const setEmployeesAction = (payload:IEmployees[]):ISetEmployeesAction => ({type: SET_EMPLOYEES, payload})
export const setLoadingEmployeesAction = (payload:boolean):ISetLoadingEmployee => ({type: SET_LOADING_EMPLOYEES, payload})
