import React from 'react';
import Cabecalho from '../../../components/Cabecalho';
import Rodape from '../../../components/Rodape';


class BasePrincial extends React.Component {
    render() {
        return (
            <>
                <Cabecalho />
                <section class="row">
                    <div className="d-flex">
                        {this.props.children}
                    </div>
                </section>
                <Rodape />
            </>


        );
    }
}

export default BasePrincial;