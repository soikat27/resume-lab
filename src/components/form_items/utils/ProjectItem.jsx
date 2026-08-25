import InputField from "./InputField";

export default function ProjectItem({id, projectNo, name, techStacks, githubLink, highlights, canEdit, handleSetInputValue, handleSetTextAreaValue, handleDeleteProject, handleAddHighlight, handleDeleteHighlight}) {
    return (
        <div className="project-item" id={id}>
            <div className="project-chunk-header">
                <p className="project-chunk-title">Add Project {projectNo}</p>
                <button type="button" className="btn-delete" disabled={!canEdit} onClick={() => {handleDeleteProject(id);}}>–</button>
            </div>

            <div className="inputs">
                <InputField type="text" name="Project Name" placeHolder="ex. resumeLab" value={name} setValue={(text) => {handleSetInputValue(id, "name", text)}} canEdit={canEdit} />
                <InputField type="text" name="Tech Stack" placeHolder="ex. HTML, CSS, JavaScript, React, API, Git" value={techStacks} setValue={(text) => {handleSetInputValue(id, "techStacks", text)}} canEdit={canEdit} />
                <InputField type="text" name="GitHub Link" placeHolder="ex. https://github.com/username/resume-lab" value={githubLink} setValue={(text) => {handleSetInputValue(id, "githubLink", text)}} canEdit={canEdit} />

                <div className="highlights">
                    <p>Add Highlights</p>
                    <button type="button" className="btn-add" disabled={!canEdit} onClick={() => {handleAddHighlight(id);}}>+</button>
                    {
                        highlights.map((highlight, index) => {
                            return (
                                <div key={highlight.id} className="highlight-item" id={highlight.id}>
                                    {
                                        (index !== 0 && <button type="button" className="btn-delete" disabled={!canEdit} onClick={() => {handleDeleteHighlight(id, highlight.id)}}>–</button>)
                                    }
                                    <InputField type="textarea" name={"Highlight " + (index+1)} placeHolder="ex. Developed an easy-to-use resume builder using React as the frontend – lets users build resume in 6 steps." value={highlight.string} setValue={(text) => {handleSetTextAreaValue(id, highlight.id, text)}} canEdit={canEdit} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}