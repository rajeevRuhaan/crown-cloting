import {createUserDocumentFromAuth, signInWitGooglePopup} from '../../utils/firebase/firebase.util'


const Signin = ()=> {

const logGoogleUser = async() => {
    const response = await signInWitGooglePopup();
    
    const userDocRef = await createUserDocumentFromAuth(response.user);
     console.log("userdoc ref",userDocRef)
}
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign In with Google Pop up</button>
        </div>
    )
}
export default Signin;