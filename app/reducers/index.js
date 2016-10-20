import {combineReducers} from "redux"

const reducers = combineReducers({
    defaultReducer: (state = {}, action) =>
    {
        return state
    }
})

export default reducers