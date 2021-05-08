import { BUSCAR_FILME, DESTAQUES, GENEROS } from '../actions/types';

const filmeReducer = (state = {}, action) => {
    switch (action.type) {
        case BUSCAR_FILME:
            return {
                ...state,
                filme: action.payload,
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
        default:
            return state;
    }
}
export default filmeReducer;