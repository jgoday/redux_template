import React from "react"
import {connect} from "react-redux"

import App from "../components/App"

const mapStateToProps = (state, ownProps) =>
{
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>
{
    return {
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer
