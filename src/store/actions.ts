import {ISetJobsAction, IJob} from "../types";

export const SET_JOBS = "SET_JOBS";
export const SET_LOADING = "SET_LOADING";


export const setJobsAction = (payload:IJob[]):ISetJobsAction => ({type:SET_JOBS, payload})
export const setLoadingAction = (payload:boolean) => ({type: SET_LOADING, payload});
