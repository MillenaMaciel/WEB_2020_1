import { NUMERO_ID } from '../actions/types'


export function alterarNumeroId(numeroId) {
    return {
        type: NUMERO_ID,
        payload: numeroId
    }
}