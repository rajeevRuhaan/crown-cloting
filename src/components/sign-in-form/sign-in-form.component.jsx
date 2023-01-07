import { useState } from "react";

import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

//import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.util";

import "./sign-in-form.styles.scss";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));

      setFormFields(defaultFormFields);
    } catch (error) {
      alert("The provided username or password is incorrect");
    }
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
    // await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button children="Sign in" buttonType="inverted" type="submit" />
          <Button
            type="button"
            children="Google sign in"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
