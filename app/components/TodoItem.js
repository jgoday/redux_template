import React, {PropTypes} from "react"

class TodoItem extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    toggleItem()
    {
        const index = this.props.index
        if (this.props.item.completed)
        {
            this.props.unmarkAsCompleted(index)
        }
        else
        {
            this.props.markAsCompleted(index)
        }
    }

    renderItem(item)
    {
        if (item.completed)
        {
            return (<span className="completed item">{item.text}</span>)
        }
        else
        {
            return (<span>{item.text}</span>)
        }
    }

    render()
    {
        return (<div>
            <input type="checkbox" onClick={this.toggleItem.bind(this)} />
            {this.renderItem(this.props.item)}
        </div>)
    }
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    markAsCompleted: PropTypes.func.isRequired,
    unmarkAsCompleted: PropTypes.func.isRequired
}

export default TodoItem