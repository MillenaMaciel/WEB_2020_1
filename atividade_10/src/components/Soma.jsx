import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

class Soma extends Component {
    render() {



        return (

            <Card title='SOMA' blue>
                <h1>{this.props.id + this.props.numeroid}</h1>
            </Card>
        )
    }
}

function mapStateToProps(state) {

    return {
        id: state.pokemonId.id,
        numeroid: state.numeroId.numeroid

    }
}

export default connect(mapStateToProps)(Soma)