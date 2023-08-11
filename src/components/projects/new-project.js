import { Link } from "react-router-dom";

import ProjectForm from "./project-form";

function NewProject() {

    return (
        <div className="project-container">
            <h1 className="project-title">New Project</h1>
            <ProjectForm />
            <Link to='/'>Back to Home</Link>
        </div>
    );
}

export default NewProject;