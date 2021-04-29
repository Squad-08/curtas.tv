import React from 'react';
import Cabecalho from '../../Components/Cabecalho';
import Rodape from '../../Components/Rodape';


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