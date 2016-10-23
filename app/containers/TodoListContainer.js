import React from "react"
import {connect} from "react-redux"

import TodoList from "../components/TodoList"

const mapStateToProps = (state, ownProps) =>
{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {

    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer