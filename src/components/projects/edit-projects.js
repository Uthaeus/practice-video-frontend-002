import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProjectForm from "./project-form";

function EditProject() {
    const { id } = useParams();
    const [project, setProject] = useState();

    useEffect(() => {

    }, []);

    return (
        <div className="project-container">
            <h1 className="project-title">Edit Project</h1>
            <ProjectForm />
            <Link to='/'>Back to Home</Link>
        </div>
    );
}

export default EditProject;