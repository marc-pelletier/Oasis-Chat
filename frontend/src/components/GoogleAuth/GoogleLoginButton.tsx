import {useEffect, useState} from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

export default function GoogleLoginButton( {setUserState} ) {
    function onSuccess(res) {
        if (res.credential != null) {
            setUserState(jwtDecode(res.credential))
            console.log("Login successful! Current user is ", jwtDecode(res.credential).name)
        }
    }

    function onError(err) {
        console.log("Login failed! ", err)
    }

    const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin 
                onSuccess={onSuccess}
                onError={onError}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                scope='profile email'
            />
        </GoogleOAuthProvider>
    )
}