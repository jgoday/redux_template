import React, {PropTypes} from "react"

class ClearCompletedItems extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<div>
            <button onClick={this.props.clearCompletedItems}
                disabled={this.props.disabled}>
                {"Clear completed items"}
            </button>
        </div>)
    }
}

ClearCompletedItems.propTypes = {
    clearCompletedItems: PropTypes.func.isRequired
    , disabled: PropTypes.bool
}

export default ClearCompletedItems