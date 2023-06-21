import GoogleLoginButton from './components/GoogleAuth/GoogleLoginButton.tsx'

export default function AuthPage( {setUserState} ) {
    return <GoogleLoginButton setUserState={setUserState} />
}