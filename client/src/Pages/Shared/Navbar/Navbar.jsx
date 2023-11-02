import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LogOut from "../../LogOut/LogOut.Jsx";
import SignInButton from "../../SignIn/SignInButton/SignInButton";

const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Elevator Maintenance</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    {
                        isAuthenticated ? (
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-10 rounded-full">
                                        <img src={user.picture} alt={user.name} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user.name}
                                        </a>
                                    </li>
                                    <li><LogOut></LogOut></li>
                                </ul>
                            </>
                        ) : <SignInButton></SignInButton>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;