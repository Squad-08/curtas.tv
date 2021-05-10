import React from 'react';
import { Spinner } from 'reactstrap';
import './styles.css';

const Carregando = (props) => {
    if (props.isOpen) {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="carregamento">
                        <main className="conteudo">
                            <div className="subconteudo">
                                <Spinner
                                    color="light"
                                    style={
                                        {
                                            width: '5rem', height: '5rem'
                                        }
                                    } />
                            </div>
                            <div className="subconteudo">
                                <h3 className="m-0 font-weight-bold text-light">
                                    Carregando...
                        </h3>
                            </div>
                            <div className="subconteudo">
                                <h3 className="m-0 font-weight-bold text-light">
                                    {props.pagina}
                                </h3>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
}

export default Carregando;