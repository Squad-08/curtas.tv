import React from 'react';
import BasePrincial from './BasePrincipal';

const Principal = (Component) => {
    return class extends React.Component {
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
}

export default Principal;