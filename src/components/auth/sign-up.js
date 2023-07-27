import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUp() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log('submitHandler sign up', data);
    }

    return (
        <div className="card auth-container">
            <h1 className="auth-title">Sign Up</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" {...register("email", { required: true })} />
                    {error?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" {...register("password", { required: true })} />
                    {error?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" {...register("confirmPassword", { required: true })} />
                    {error?.confirmPassword && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="auth-btn">Sign In</button>
            </form> 

            <Link to="/sign-in">Already have an account? Sign In</Link> /
            <Link to="/"> Home</Link>
        </div>
    );
}

export default SignUp;