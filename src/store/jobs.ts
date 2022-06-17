
import {IJob, ISetJobsAction, ISetLoadingJobs, IGetJobs} from "../types";
import {SET_LOADING_JOBS, SET_JOBS} from "./actions";

type IStateJobs = {
    list:IJob[],
    isLoading:boolean
}

const initialState:IStateJobs = {
    list: [],
    isLoading: false,
}

const jobsReducer = (state = initialState, action:ISetJobsAction | ISetLoadingJobs | IGetJobs) => {
    switch (action.type) {
        case SET_JOBS: {
            return {...state, list:{...action.payload}}
        }
        case SET_LOADING_JOBS: {
            return {...state, isLoading:action.payload}
        }
        default :{
            return state
        }
    }
}
export default jobsReducer;