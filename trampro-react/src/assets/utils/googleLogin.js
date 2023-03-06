import jwt_decode from "jwt-decode";
import axios from "axios";


export function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)

    const userGoogle = {
        email: data.email,
        google_Id: data.sub
    }
    console.log(userGoogle)
    axios.get('http://localhost:3005/googleUsers')
        .then(response => {
            let users = response.data
            const foundUser = users.find(user => user.email === userGoogle.email)
            if (foundUser) {
                // Usuário encontrado com o mesmo email, faça algo com ele aqui
                console.log('Usuário encontrado:', foundUser)
            } else {
                // Usuário não encontrado
                console.log('Usuário não encontrado com o email:', userGoogle.email)
            }
        })


}



export function initializeGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: "486947039388-rqfo3jbkuu3dibmal44u1ovl7e585kug.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
}

export function renderGoogleSignInButton() {
    google.accounts.id.renderButton(
        document.getElementById("buttonLoginDiv"),
        {
            theme: "outline",
            size: "large",
            type: "standard",
            shape: "rectangular",
            text: "signin_with.",
            logo_alignment: "left",
            width: "300"
        }  // customization attributes
    );
}



export function displayGoogleSignInDialog() {
    google.accounts.id.prompt(); // also display the One Tap dialog
}

