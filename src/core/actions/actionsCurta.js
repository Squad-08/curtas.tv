import axios from 'axios';
import { api } from '../config/api';
import { DESTAQUES, GENEROS1, GENEROS2, GENEROS3, BUSCAR_CURTA, LIMPAR_CURTA } from './types';
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

export const listarGeneros1 = (genero, quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/${genero}?limitOf=${quantidade ? quantidade : 6}`)
            .then((response) => {
                dispatch({ type: GENEROS1, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const listarGeneros2 = (genero, quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/${genero}?limitOf=${quantidade ? quantidade : 6}`)
            .then((response) => {
                dispatch({ type: GENEROS2, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const listarGeneros3 = (genero, quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/${genero}?limitOf=${quantidade ? quantidade : 6}`)
            .then((response) => {
                dispatch({ type: GENEROS3, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const limparCurta = () => {
    return (dispatch) => {
        dispatch({ type: LIMPAR_CURTA });
    }
}