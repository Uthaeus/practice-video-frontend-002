import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="errorpage">
            <h1 className="error-title">Something went wrong</h1>
            <p className="error-subtitle">page could not be found, please try again</p>

            <Link to="/" className="error-link">back to home page</Link>
        </div>
    );
}

export default ErrorPage;