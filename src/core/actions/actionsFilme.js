import axios from 'axios';
import { api } from '../config/api';
import { DESTAQUES, GENEROS, BUSCAR_CURTA,LIMPAR_CURTA } from './types';
import erros from './erroHandler';

export const buscarCurta = (id) => {
    return (dispatch) => {
        axios.get(`${api}/movie/${id}`)
            .then((response) => {
                console.log('Conectado na API');
                console.log(response.data);
                dispatch({ type: BUSCAR_CURTA, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const listarDestaques = (quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/destaques?limitOf=${quantidade ? quantidade : 4}`)
            .then((response) => {
                dispatch({ type: DESTAQUES, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const listarGeneros = (genero, quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/${genero}?limitOf=${quantidade ? quantidade : 6}`)
            .then((response) => {
                dispatch({ type: GENEROS, payload: response.data });
            }).catch((err) => erros(err));
    }
}


export const limparCurta = () => {
    return (dispatch) => {
        dispatch({ type: LIMPAR_CURTA });
    }
}