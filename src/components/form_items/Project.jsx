import ProjectItem from "./utils/ProjectItem.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";

import { useState } from "react";

export default function Project({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [projectItems, setProjectItems] = useState((resumeData.project !== undefined) ? resumeData.project : []);
    const [canEdit, setCanEdit] = useState(resumeData.project === undefined || resumeData.project.length ===0);

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate all input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        form.querySelectorAll(".project-item").forEach(projectItem => {
            const nameInput = projectItem.querySelector('[name="Project Name"]');
            const techStacksInput = projectItem.querySelector('[name="Tech Stack"]');
            const githubLinkInput = projectItem.querySelector('[name="GitHub Link"]');
            const highlight1Input = projectItem.querySelector('[name="Highlight 1"]');

            validateInputs(nameInput, techStacksInput, githubLinkInput, highlight1Input);
        });

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update resume data and go to next form
        const nextProjectItems = projectItems.map(projectItem => {
            const trimmedTechStacks = projectItem.techStacks.trim();
            const filtered = projectItem.highlights.filter(highlight => highlight.string.trim().length > 0);
            return {...projectItem, techStacks: trimmedTechStacks, highlights: filtered};
        });
        setResumeData({ ...resumeData, project: nextProjectItems});
        goToNextForm();
    }

    function validateInputs(nameInput, techStacksInput, githubLinkInput, highlight1Input) {
        // 1. enforce rule
        if (nameInput.value.trim() === "")
            nameInput.setCustomValidity("Please enter a project name.");
        else if (techStacksInput.value.trim() === "")
            techStacksInput.setCustomValidity("List tech stacks separated by comma(,). At least 1 tech stack is desired!");
        else if (githubLinkInput.value.trim() === "")
            githubLinkInput.setCustomValidity("Please enter a valid github url to the project source code.");
        else if (highlight1Input.value.trim() === "")
            highlight1Input.setCustomValidity("Please enter at least one project highlight.");
    }

    function handleAddProject() {
        const newProjectItem = {
            id: crypto.randomUUID(),
            name: "",
            techStacks: "",
            githubLink: "",
            highlights: [{id: crypto.randomUUID(), string: ""}]
        };

        setProjectItems([...projectItems, newProjectItem]);
    }

    function deleteProject(id) {
        const nextProjectItems = projectItems.filter(projectItem => projectItem.id !== id);
        setProjectItems(nextProjectItems);
    }

    function addHighlight(projectId) {
        const nextProjectItems = projectItems.map(item => {
            if (item.id === projectId)
                item.duties.push({id: crypto.randomUUID(), string: ""});

            return item;
        });

        setProjectItems(nextProjectItems);
    }

    function deleteHighlight(projectId, highlightId) {
        const nextProjectItems = projectItems.map(item => {
            if (item.id === projectId)
                item.highlights = item.highlights.filter(highlight => highlight.id !== highlightId);

            return item;
        });

        setProjectItems(nextProjectItems);
    }

    function updateInput(id, field, text) {
        const nextProjectItems = projectItems.map(projectItem => {
            if (projectItem.id === id)
                projectItem[field] = text;

            return projectItem;
        });

        setProjectItems(nextProjectItems);
    }

    function updateTextArea(id, highlightId, text) {
        const nextProjectItems = projectItems.map(projectItem => {
            if (projectItem.id === id)
                projectItem.highlights = projectItem.highlights.map(highlight => {
                    if (highlight.id === highlightId)
                        highlight.string = text;

                    return highlight;
                });

            return projectItem;
        });

        setProjectItems(nextProjectItems);
    }
    
    return (
        <form className="container project" onSubmit={handleSaveNext}>
            <div className="form-title">
                <h3>Project</h3>
                <button type="button" className="btn-add" disabled={!canEdit} onClick={handleAddProject}>+</button>
            </div>

            {
                projectItems.map((projectItem, index) => {
                    return (
                        <ProjectItem
                            key={projectItem.id}
                            id={projectItem.id}
                            projectNo={index+1} 
                            name={projectItem.name} 
                            techStacks={projectItem.techStacks} 
                            githubLink={projectItem.githubLink} 
                            highlights={projectItem.duties}
                            canEdit={canEdit}
                            handleSetInputValue={updateInput}
                            handleSetTextAreaValue={updateTextArea}
                            handleDeleteProject={deleteProject}
                            handleAddHighlight={addHighlight}
                            handleDeleteHighlight={deleteHighlight}
                        />
                    );
                })
            }
            
            <ButtonGroup 
                hasPrev={true}
                hasEdit={!canEdit}
                hasNext={true}
                handlePrev={goToPrevForm}
                setCanEdit={setCanEdit}
            />
        </form>
    );
}