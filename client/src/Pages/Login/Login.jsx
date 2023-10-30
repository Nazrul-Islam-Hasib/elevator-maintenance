
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl rounded'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {required: "Email Address is required" })} className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" 
                        {...register("password", {required: "Password is required", minLength : {value : 6, message: 'Password must be 6 character long'} })} 
                        className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forgot Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    {/* <div>
                        { loginError && <p className='text-red-600'>{loginError}</p>}
                    </div> */}
                </form>
                <div className='divider'></div>
                <p>New to the Site ? <Link className='text-secondary' to="/signup">Create new account</Link></p>
            </div>
        </div>
    );
};

export default Login;