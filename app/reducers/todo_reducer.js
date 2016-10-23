import Constants from "../constants"

const defaultState = [
    { text: "MEAN course", completed: false }
    , { text: "Scala functional design course", completed: false }
]

const todo_reducer = (state = defaultState, action) =>
{
    switch (action.type)
    {
        case Constants.ADD_TODO_ITEM:
            return state.concat({
                text: action.text,
                completed: false
            })

        case Constants.CLEAR_COMPLETED_ITEMS:
            return state.filter(i => !i.completed)

        case Constants.MARK_AS_COMPLETED:
            return state.map((t, index) =>
            {
                if (index == action.todo_index)
                {
                    return { ...t, completed: true }
                }
                else
                {
                    return t
                }
            })
        case Constants.UNMARK_AS_COMPLETED:
            return state.map((t, index) =>
            {
                if (index == action.todo_index)
                {
                    return { ...t, completed: false }
                }
                else
                {
                    return t
                }
            })
        default:
            return state
    }
}

export default todo_reducer