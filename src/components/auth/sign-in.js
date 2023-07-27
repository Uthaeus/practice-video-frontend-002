import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log('submitHandler sign in', data);
    }

    return (
        <div className="auth-container">
        <h1>Sign In</h1>

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

            <button type="submit" className="btn btn-primary">Sign In</button>
        </form>

        <Link to="/sign-up">Don't have an account? Sign Up</Link> /
        <Link to="/"> Home</Link>
    </div> 
    );
}

export default SignIn;