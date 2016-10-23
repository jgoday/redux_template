import React from "react"
import {connect} from "react-redux"

import {mark_as_completed, unmark_as_completed} from "../actions"
import TodoItem from "../components/TodoItem"

const mapStateToProps = (state, ownProps) =>
{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        markAsCompleted: (id) => dispatch(mark_as_completed(id)),
        unmarkAsCompleted: (id) => dispatch(unmark_as_completed(id))
    }
}

const TodoItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem)

export default TodoItemContainer