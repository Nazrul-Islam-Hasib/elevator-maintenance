import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
    const { logout } = useAuth0();
    return (
        <button className="btn btn-error btn-xs" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>

    );
};

export default LogOut;