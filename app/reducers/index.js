import {combineReducers} from "redux"

import todo_reducer from "./todo_reducer"

const reducers = {
    defaultReducer: (state = {}, action) =>
    {
        return state
    },
    todos: todo_reducer
}

export default reducers