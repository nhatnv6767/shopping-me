import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth"
import {useEffect} from "react";

export default function SignIn() {

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        console.log(response)
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    );
}