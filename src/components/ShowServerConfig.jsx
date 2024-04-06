import React, { Children } from "react";
import PropTypes from 'prop-types';

const ShowServerConfig = ({minConnections,maxConnections,restartAlways,children}) => {

    return(
        <div>
            {children}
        </div>
    )
}

ShowServerConfig.propTypes = {
    minConnections:PropTypes.number,
    maxConnections:PropTypes.number,
    restartAlways:PropTypes.bool,
    children:PropTypes.element

}

export default ShowServerConfig;