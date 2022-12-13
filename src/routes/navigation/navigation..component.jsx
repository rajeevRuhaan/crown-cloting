import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.util";

import {ReactComponent as CrownLogo } from '../../assets/crown.svg'; 
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const signOutHandler = async()=> {
    await signOutUser();
    setCurrentUser(null);

  }

  console.log(currentUser);
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>SHOP</Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutHandler}>Sign out</span>
                  ) : (<Link className="nav-link" to='/auth'>SIGN IN</Link>
                  )}
                
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };


  export default Navigation;