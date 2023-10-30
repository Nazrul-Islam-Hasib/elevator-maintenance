import { useForm } from "react-hook-form";
import { Link, } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handleSignUp = data => {
        console.log(data);
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl rounded'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}

                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}

                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 character long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special character' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {/* <div>
                        {signupError && <p className='text-red-600'>{signupError}</p>}
                    </div> */}
                </form>
                <div className='divider'></div>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>
                
            </div>
        </div>
    );
};

export default SignUp;