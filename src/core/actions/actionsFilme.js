import axios from 'axios';
import { api } from '../config/api';
import { LISTAR_FILMES, BUSCAR_FILME } from './types';
import erros from './erroHandler';

 export const buscarFilme = (id) => {
     return (dispatch) => {
         axios.get(`${api}/filmes/${id}`)
             .then((response) => {
                 dispatch({ type: BUSCAR_FILME, payload: response.data });
             })
             .catch(erros());
     }
 }

 export const listarFilmes = () => {
     return (dispatch) => {
         axios.get(`${api}/filmes`)
             .then((response) => {
                 dispatch({ type: LISTAR_FILMES, payload: response.data });
             })
             .catch(erros());
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