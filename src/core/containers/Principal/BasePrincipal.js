import React from 'react';
import Cabecalho from '../../../components/Cabecalho';
import Rodape from '../../../components/Rodape';
import '../../../assets/styles/reset.css';
import '../../../assets/styles/base.css';

class BasePrincial extends React.Component {
    render() {
        return (
            <>
                <Cabecalho />
                <main>
                    <section>
                        <div>
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