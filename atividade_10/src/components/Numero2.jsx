import React, { Component } from 'react'
import Card from './Card'
import './Navigate.css'
import { connect } from 'react-redux'
import { alterarNumeroId } from '../store/actions/numeroId'



class Numero2 extends Component {

    p() {

        const numeroid = this.props.numeroid + 1
        this.props.mudarNumeroId(numeroid)

    }
    a() {


        const numeroid = this.props.numeroid - 1
        this.props.mudarNumeroId(numeroid)

    }

    s10() {
        const numeroid = this.props.numeroid + 10
        this.props.mudarNumeroId(numeroid)


    }

    sub10() {
        const numeroid = this.props.numeroid - 10
        this.props.mudarNumeroId(numeroid)


    }


    render() {
        return (
            <Card title='Número 2' red>
                <div className='navigate'>
                    <button className='btn btn-secondary' onClick={() => this.sub10()}>
                        -10
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.a()}>
                        anterior
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.p()}>
                        proximo
                    </button>

                    <button className='btn btn-secondary' onClick={() => this.s10()}>
                        +10
                    </button>
                    <input value={this.props.numeroid} readOnly />

                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        numeroid: state.numeroId.numeroid
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        mudarNumeroId(numeroId) {
            const action = alterarNumeroId(numeroId)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Numero2)

