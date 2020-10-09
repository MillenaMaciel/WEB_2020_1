import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

class Multiplicacao extends Component {
    render() {


        return (

            <Card title='MULTIPLICAÇÂO' green>
                <h1>{this.props.id * this.props.numeroid}</h1>

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

export default connect(mapStateToProps)(Multiplicacao)