import React, {PropTypes} from "react"

import TodoItemContainer from "../containers/TodoItemContainer"

class TodoList extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    renderTodoItem(item, index)
    {
        return (<li key={index}>
            <TodoItemContainer item={item} index={index} />
        </li>)
    }

    render()
    {
        return (<div>
        <ul>
        {this.props.todos.map(this.renderTodoItem)}
        </ul>
        </div>)
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList