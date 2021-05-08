import axios from 'axios';
import { api } from '../config/api';
import { DESTAQUES, GENEROS, BUSCAR_FILME } from './types';
import erros from './erroHandler';

export const buscarFilme = (id) => {
    return (dispatch) => {
        axios.get(`${api}/movie/${id}`)
            .then((response) => {
                console.log(response)
                dispatch({ type: BUSCAR_FILME, payload: response.data });
            })
        // .catch(erros());
    }
}

export const listarDestaques = () => {
    return (dispatch) => {
        axios.get(`${api}/movies/destaques`)
            .then((response) => {
                dispatch({ type: DESTAQUES, payload: response.data });
            }).catch((err) => erros(err));
    }
}

export const listarGeneros = (genero, quantidade) => {
    return (dispatch) => {
        axios.get(`${api}/movies/${genero}Of=${quantidade ? quantidade : 6}`)
            .then((response) => {
                dispatch({ type: GENEROS, payload: response.data });
            }).catch((err) => erros(err));
    }
}


export const testeAPI = ({ email, senha }, callback) => {
    return (dispatch) => {
        console.log('Actions teste api...');
        axios.post(`http://localhost:8081/usuarios/login`, { email, senha })
            .then((response) => {
                console.log(response.data);
                //dispatch({ type: LOGIN_USUARIO, payload: response.data })
            })
            .catch((err) => {
                //callback(errorHandler(err));
                console.log(err);
            });
    }
}