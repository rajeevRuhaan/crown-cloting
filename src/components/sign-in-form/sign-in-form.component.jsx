import {useState} from 'react';
import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component"
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWitGooglePopup } from '../../utils/firebase/firebase.util';

const defaultFormFields = {
    
    email: '',
    password: '',
    
}

const SignIn = () =>  {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email, password} = formFields;

    const handleChange = (e) => {
            const {name, value} = e.target;
            setFormFields({...formFields, [name]: value})
        }

    const handleSubmit = async(e) => {
    e.preventDefault();
        try {
        const response = await signInAuthUserWithEmailAndPassword(email, password) 
        console.log(response)   

        } catch (error) {
            alert('The provided username or password is incorrect')
        }   
    }

    const signInWithGoogle = async ()=> {
        const response = await signInWitGooglePopup();
        await createUserDocumentFromAuth(response.user)
    }
    
     return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>   
            <FormInput 
            label="email" 
            type="email" 
            required 
            onChange={handleChange} name='email' 
            value={email} />
            <FormInput
             label="password" 
             type="password" 
             required 
             onChange={handleChange} name='password' 
             value={password} />
            <div className='buttons-container'>
               <Button children="Sign in" buttonType="inverted" type="submit" />
                <Button type="button" children="Google sign in" buttonType="google" onClick={signInWithGoogle}/> 
            </div>
            
        </form>
        </div>
        
     )
}

export default SignIn ;
