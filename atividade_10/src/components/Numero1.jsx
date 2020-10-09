import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'
import { connect } from 'react-redux'
import { alterarId } from '../store/actions/pokemonId'


class Numero1 extends Component {

    proximo() {
        const id = this.props.id + 1
        this.props.alterarPokemonId(id)

    }
    anterior() {
        const id = this.props.id - 1
        this.props.alterarPokemonId(id)

    }

    soma10() {
        const id = this.props.id + 10
        this.props.alterarPokemonId(id)


    }

    subtrair10() {
        const id = this.props.id - 10
        this.props.alterarPokemonId(id)


    }


    render() {
        return (
            <Card title='Número 1' red>
                <div className='navigate'>
                    <button className='btn btn-secondary' onClick={() => this.subtrair10()}>
                        -10
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.anterior()}>
                        anterior
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.proximo()}>
                        proximo
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.soma10()}>
                        +10
                    </button>
                    <input value={this.props.id} readOnly />

                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.pokemonId.id
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarPokemonId(novoId) {
            const action = alterarId(novoId)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Numero1)