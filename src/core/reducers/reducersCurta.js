import { BUSCAR_CURTA, DESTAQUES, GENEROS1, GENEROS2, GENEROS3, LIMPAR_CURTA, LIMPAR_DESTAQUES, LIMPAR_GENEROS } from '../actions/types';

const reducersCurta = (state = {}, action) => {
    switch (action.type) {
        case BUSCAR_CURTA:
            return {
                ...state,
                curta: action.payload,
            }
        case DESTAQUES:
            return {
                ...state,
                destaques: action.payload,
            }
        case GENEROS1:
            return {
                ...state,
                generos1: action.payload,
            }
        case GENEROS2:
            return {
                ...state,
                generos2: action.payload,
            }
        case GENEROS3:
            return {
                ...state,
                generos3: action.payload,
            }
        case LIMPAR_CURTA:
            return {
                ...state,
                curta: null,
            }
        case LIMPAR_DESTAQUES:
            return {
                ...state,
                curta: null,
            }
        case LIMPAR_GENEROS:
            return {
                ...state,
                curta: null,
            }
        default:
            return state;
    }
}
export default reducersCurta;