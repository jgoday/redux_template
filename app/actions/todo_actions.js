import Constants from "../constants"

const add_todo_item = (text) =>
{
    return {
        type: Constants.ADD_TODO_ITEM,
        text
    }
}

const clear_completed_items = () =>
{
    return {
        type: Constants.CLEAR_COMPLETED_ITEMS
    }
}

const mark_as_completed = (index) =>
{
    return {
        type: Constants.MARK_AS_COMPLETED,
        todo_index: index
    }
}

const unmark_as_completed = (index) =>
{
    return {
        type: Constants.UNMARK_AS_COMPLETED,
        todo_index: index
    }
}

export {
    add_todo_item
    , clear_completed_items
    , mark_as_completed
    , unmark_as_completed
}