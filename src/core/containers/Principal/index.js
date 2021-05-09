import React from 'react';
import BasePrincial from './BasePrincipal';
import { connect } from 'react-redux';
import * as actionsCurta from '../../actions/actionsCurta';

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
        curtas: state.curta.curtas
    });

    return connect(mapStateToProps, actionsCurta)(ComponentPrincipal);
}

export default Principal;