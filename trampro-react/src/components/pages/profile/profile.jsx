import React from "react";
import './stylesheets/profile.css'

import NavProfile from './navProfile'
import FirstViewPort from './fvpProfile'

function Profile() {
    return (
        <React.Fragment>

            <NavProfile />
            <FirstViewPort />

        </React.Fragment>

    )

}

export default Profile;