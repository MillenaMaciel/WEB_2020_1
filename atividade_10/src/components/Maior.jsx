import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

class Maior extends Component {
    render() {





        return (
            <Card title='MAIOR' green>
                <h1>{Math.max(this.props.numeroid, this.props.id)}</h1>

            </Card>
        )
    }
}

// function  maior(state) {
//         if(this.props.id > this.props.numeroid)
//         var m = this.props.id
//         else m = this.props.numeroid
// }

function mapStateToProps(state) {

    return {
        id: state.pokemonId.id,
        numeroid: state.numeroId.numeroid


    }
}



export default connect(mapStateToProps)(Maior)