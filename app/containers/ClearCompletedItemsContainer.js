import React from "react"
import {connect} from "react-redux"

import {clear_completed_items} from "../actions"
import ClearCompletedItems from "../components/ClearCompletedItems"

const mapStateToProps = (state, ownProps) =>
{
    return {
        disabled: state.todos.filter(i => i.completed).length == 0
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
        clearCompletedItems: () => dispatch(clear_completed_items())
    }
}

const ClearCompletedItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClearCompletedItems)

export default ClearCompletedItemsContainer