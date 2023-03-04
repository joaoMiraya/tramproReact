import React from "react";

import FirstViewPort from "./firstViewPort";
import SecondViewPort from "./secondViewPort";
import LastComponentHome from "./lastComponentHome";

function Home() {

    return (
        <React.Fragment>
            
            <FirstViewPort />
            <SecondViewPort />
            <LastComponentHome />

        </React.Fragment>
    )
}

export default Home