import React from "react"
import {connect} from "react-redux"

import {add_todo_item} from "../actions"
import AddTodoItem from "../components/AddTodoItem"

const mapStateToProps = (state, ownProps) =>
{
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        addTodoItem: (text) => dispatch(add_todo_item(text))
    }
}

const AppTodoItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoItem)

export default AppTodoItemContainer