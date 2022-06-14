import {SET_JOBS} from './store/actions';

export type IJob = {
    id: number,
    jobId: string,
    title: string,
}

export interface ISetJobsAction {
    type: typeof SET_JOBS,
    payload: IJob[]
}