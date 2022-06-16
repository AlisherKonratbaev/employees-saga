import {SET_JOBS, SET_LOADING} from './store/actions';

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
    type: typeof SET_LOADING,
    payload: boolean,
}