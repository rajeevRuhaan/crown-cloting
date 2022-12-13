import {useState, useContext} from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';


import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import './sign-up-form.styles.scss'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

const {setCurrentUser} = useContext(UserContext);


    const handleSubmit =async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("password doesnot match")
            return 
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            
            setCurrentUser(user)

           await createUserDocumentFromAuth(user, {displayName})
           
            // clear form field
            setFormFields(defaultFormFields)

        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            else {

                console.log("user creation encounter an error", error)
            }
        }

    }

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
}

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName} />
            
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email} />
            
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password} />
                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                
                <Button children="Sign-up" buttonType="inverted" type="submit"/>
            </form>
        </div>
    )
}
export default SignUpForm;