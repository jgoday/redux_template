import React, {PropTypes} from "react"

class App extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        return (<div>
            <h1>{"Sample redux and react App"}</h1>
        </div>)
    }
}

App.propTypes = {
}

export default App