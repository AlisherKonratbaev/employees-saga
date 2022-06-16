import {IJob, ISetJobsAction, ISetLoadingJobs} from "../types";
import {SET_LOADING, SET_JOBS} from "./actions";

type IStateJobs = {
    list:IJob[],
    isLoading:boolean
}

const initialState:IStateJobs = {
    list: [],
    isLoading: false,
}

const jobsReducer = (state = initialState, action:ISetJobsAction | ISetLoadingJobs) => {
    switch (action.type) {
        case SET_JOBS: {
            return {...state, list:{...action.payload}}
        }
        case SET_LOADING: {
            return {...state, isLoading:action.payload}
        }
        default :{
            return state
        }
    }
}
export default jobsReducer;