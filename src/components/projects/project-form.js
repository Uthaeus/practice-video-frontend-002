import { useForm } from "react-hook-form";
import { useEffect } from "react";

function ProjectForm({ project }) {
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (project) {
            reset(project);
        }
    }, [project, reset]);

    function submitHandler(data) {
        console.log('project form submit', data);


    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="project-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', {required: true})} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows={3} {...register('description', {required: true})} />
            </div>

            <div className="form-group">
                <label htmlFor="video-url">Video Url</label>
                <input type='text' className="form-control" {...register('video-url', {required: true})} />
            </div>

            <button type='submit' className="project-form-btn">Submit</button>
        </form>
    );
}

export default ProjectForm;