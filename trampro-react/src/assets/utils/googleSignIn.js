import jwt_decode from "jwt-decode";
import axios from "axios";
import { formateDate } from "./regex";


const data_cadastro = Date();
const formatingDate = data_cadastro.replace(formateDate, "$3/$2/$4");
const formattedDate = formatingDate.slice(0, 11);

export function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)

    const googleUser = {
        nome: data.given_name,
        sobrenome: data.family_name,
        email: data.email,
        foto: data.picture,
        data_cadastro: formattedDate,
        id_google: data.sub
    }

    axios.post('http://localhost:3005/googleUsers', googleUser)
        .then(() => {
            window.location.reload()
        })
        .catch((error) => console.log(error));
}


export function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: "486947039388-rqfo3jbkuu3dibmal44u1ovl7e585kug.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
}

export function renderGoogleSignInButton() {
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            theme: "outline",
            size: "large",
            type: "standard",
            shape: "rectangular",
            text: "signup_with.",
            logo_alignment: "left",
            width: "300"
        }  // customization attributes
    );
}

export function displayGoogleSignInDialog() {
    google.accounts.id.prompt(); // also display the One Tap dialog
}

