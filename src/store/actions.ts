import {ISetJobsAction, IJob} from "../types";

export const SET_JOBS = "SET_JOBS";


export const setJobsAction = (payload:IJob[]):ISetJobsAction => ({type:SET_JOBS, payload})
