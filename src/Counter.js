import React from 'react'

import { connect } from 'react-redux'
import { incAction, decAction } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            {props._counterVal}
        </h1>
        <button
            onClick={props._incAction}
        >
            +
    </button>
        <button
            onClick={props._decAction}
        >
            -
    </button>
    </div>
)

const mapStateToProps = state => ({
    _counterVal: state.counterReducerName.counter
})

const mapDispatchToProps = dispatch => ({
    _incAction: () => dispatch(incAction()),
    _decAction: () => dispatch(decAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)