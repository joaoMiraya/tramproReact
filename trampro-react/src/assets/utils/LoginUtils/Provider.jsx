import React from "react";
import StoreContext from "../LoginUtils/Context";
import useStorage from "./useStorage";

const StoreProvider = ({ children }) => {

const [token, setToken] = useStorage('token');

    return(
        <StoreContext.Provider
        value={{
            token,
            setToken
        }}>
                {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;