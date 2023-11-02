import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (

        isAuthenticated && <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={user.picture} alt={user.name}  /></figure>
            <div className="card-body">
                <h2 className="card-title">Welcome {user.name}</h2>
                <p>email: {user.email}</p>
            </div>
        </div>

    );
};

export default User;