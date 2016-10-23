import React, {PropTypes} from "react"

import AddTodoItemContainer from "../containers/AddTodoItemContainer"
import ClearCompletedItemsContainer from "../containers/ClearCompletedItemsContainer"
import TodoListContainer from "../containers/TodoListContainer"

class App extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        return (<div>
            <h1>{"Todo List"}</h1>
            <TodoListContainer />
            <AddTodoItemContainer />
            <ClearCompletedItemsContainer />
        </div>)
    }
}

App.propTypes = {
}

export default App