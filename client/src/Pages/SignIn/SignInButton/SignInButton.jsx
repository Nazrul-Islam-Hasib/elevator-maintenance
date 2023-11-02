import { useAuth0 } from "@auth0/auth0-react";

const SignInButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className="btn btn-primary" onClick={() => loginWithRedirect()}>SignIn</button>
    );
};

export default SignInButton;