export default function ProjectPreview ({projects}) {
    if (!projects)
        return;

    return (
        <div className="project-preview">
            {(projects.length > 0) && <div className="heading">Projects</div>}

            {projects.map((project) => {
                return (
                    <div key={project.id} className="project-item">
                        <div className="project-header">
                            <div className="left">
                                {project.name && <p className="project-name">{project.name}</p>}
                                {project.techStacks && <p className="project-techStacks">{project.techStacks}</p>}
                            </div>
                            {project.github && <a className="project-github" href={(project.githubLink.startsWith("http")) ? project.githubLink : "https://"+project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                        </div>
                        <div className="highlights">
                            <ul>
                                {project.highlights.map(highlight => {
                                    return <li key={highlight.id}>{highlight.string}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}