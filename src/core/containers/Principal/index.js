import React from 'react';
import BasePrincial from './BasePrincipal';
import { connect } from 'react-redux';
import * as actionsFilme from '../../actions/actionsFilme';

const Principal = (Component) => {
    class ComponentPrincipal extends React.Component {
        render() {
            return (
                <>
                    <BasePrincial>
                        <Component {...this.props} />
                    </BasePrincial>
                </>
            );
        }
    }

    const mapStateToProps = state => ({
        filmes: state.filme.filmes
    });

    return connect(mapStateToProps, actionsFilme)(ComponentPrincipal);
}

export default Principal;