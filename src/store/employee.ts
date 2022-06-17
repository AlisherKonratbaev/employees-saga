import { SET_EMPLOYEES, SET_LOADING_EMPLOYEES} from "./actions";
import { IEmployees, ISetEmployeesAction, ISetLoadingEmployee} from "../types"

type IStateJobs = {
    list:IEmployees[],
    isLoading:boolean
}

const initialState:IStateJobs = {
    list: [],
    isLoading: false,
}

const employeeReducer = (state = initialState, action:ISetEmployeesAction | ISetLoadingEmployee) => {
    switch(action.type) {
        case SET_EMPLOYEES: {
            return {...state, list:action.payload}
        }
        case SET_LOADING_EMPLOYEES: {
            return {...state, isLoading:action.payload}
        }
        default: {
            return state
        }
    }
}

export default employeeReducer;