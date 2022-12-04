/* import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth' */
import {
    auth, 
    createUserDocumentFromAuth, 
    signInWitGooglePopup,  
    signInWithGoogleRedirect,
    
} from '../../utils/firebase/firebase.util'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import Button from '../../components/button/button.component';


const Authentication = ()=> {

/*     useEffect (async () => {

            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
            console.log(response.user)

    }, []) */

const logGoogleUser = async() => {
    const response = await signInWitGooglePopup();
    // response after login or create account
    const userDocRef = await createUserDocumentFromAuth(response.user);
    
}

/* const logGoogleRedirectUser = async() => {
    const response = await signInWithGoogleRedirect();
    // response after login or create account
     console.log(response);
} */

    return(
        <div>
            <h1>Sign in page</h1>
            <SignIn />

            {/* <button onClick={logGoogleRedirectUser}>Sign In with Google redirect</button> */}
            <SignUpForm />
        </div>
    )
}
export default Authentication;