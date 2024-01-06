import React, {useContext} from "react";
import StoreContext from "../../assets/utils/LoginUtils/Context";
import { Route } from 'react-router-dom';

const RoutesPrivate = ({ component: Component, ...rest }) => {
const { token } = useContext(StoreContext)

    return (
        <Route
            {...rest}
            render={() => token
                ? <Component {...rest} />
                : <Redirect to="/" />
            }
        />
    )
}

export default RoutesPrivate;