import { BUSCAR_FILME, LISTAR_FILMES } from '../actions/types';

const filmeReducer = (state = {}, action) => {
    switch (action.type) {
        case BUSCAR_FILME:
            return {
                ...state,
                filme: action.payload,
            }
        case LISTAR_FILMES:
            return {
                ...state,
                filmes: action.payload.filmes,
            }
        default:
            return state;
    }
}
export default filmeReducer;