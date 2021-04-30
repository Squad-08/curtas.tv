import React from 'react';
import Cabecalho from '../../../components/Cabecalho';
import Rodape from '../../../components/Rodape';
import '../../../assets/styles/reset.css';

class BasePrincial extends React.Component {
    render() {
        return (
            <>
                <Cabecalho />
                <main role="main">

                    <section class="jumbotron text-center">
                        <div class="container">
                            {this.props.children}
                        </div>
                    </section>
                </main>
                <Rodape />
            </>
        );
    }
}

export default BasePrincial;