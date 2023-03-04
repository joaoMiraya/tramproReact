import jwt_decode from "jwt-decode";

export function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
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

