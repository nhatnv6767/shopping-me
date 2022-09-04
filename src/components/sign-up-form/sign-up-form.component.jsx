import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
export default function SignUpForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const handeSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(`Passwords do not match`)
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            
        } catch (e) {
            console.log("User creation encountered an error", e)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handeSubmit}>
                <label>Display Name</label>
                <input
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <label>Email</label>
                <input
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <label>Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}