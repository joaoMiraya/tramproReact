import React from "react";
import { useNavigate } from "react-router-dom";
import FirstViewPort from "./firstViewPort";
import SecondViewPort from "./secondViewPort";
import LastComponentHome from "./lastComponentHome";

function Home() {
const navigate = useNavigate();

    return (
        <React.Fragment>
            
            <FirstViewPort />
            <SecondViewPort />
            <LastComponentHome />

        </React.Fragment>
    )
}

export default Home