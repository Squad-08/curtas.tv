import { BUSCAR_CURTA, DESTAQUES, GENEROS, LIMPAR_CURTA } from '../actions/types';

const filmeReducer = (state = {}, action) => {
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
        case GENEROS:
            return {
                ...state,
                generos: action.payload,
            }
        case LIMPAR_CURTA:
            return {
                ...state,
                curta: null,
            }
        default:
            return state;
    }
}
export default filmeReducer;