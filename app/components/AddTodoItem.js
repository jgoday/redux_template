import React, {PropTypes} from "react"
import KeyCodes from "../constants/keycodes"

class AddTodoItem extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    handleKeyPress(ev)
    {
        if (ev.which === KeyCodes.ENTER
         && ev.target.value != "")
        {
            this.props.addTodoItem(ev.target.value)
            ev.target.value = ""
        }
    }

    render()
    {
        return (<div>
            <input type="text"
                onKeyPress={this.handleKeyPress.bind(this)} />
        </div>)
    }
}

AddTodoItem.propTypes = {
    addTodoItem: PropTypes.func.isRequired
}

export default AddTodoItem