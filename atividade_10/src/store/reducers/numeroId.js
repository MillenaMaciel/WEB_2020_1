import { NUMERO_ID } from '../actions/types'

const initialState = {
    numeroid: 1

}

export default function (state = initialState, action) {
    switch (action.type) {
        case NUMERO_ID:
            return {
                ...state,
                numeroid: action.payload
            }
        default:
            return state
    }

}


// import { NOVO_ID } from '../actions/types'

// const initialState = {
//     id: 1

// }

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case NOVO_ID:
//             return {
//                 ...state,
//                 id: action.payload
//             }
//         default:
//             return state
//     }

// }