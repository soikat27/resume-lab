import { useState } from "react";

function Project({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [projectItems, setExperienceItems] = useState((resumeData.project !== undefined) ? resumeData.project : []);
    const [canEdit, setCanEdit] = useState(resumeData.project === undefined || resumeData.project.length ===0);
    
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
                            experienceNo={index+1} 
                            position={expItem.position} 
                            company={expItem.company} 
                            location={expItem.location} 
                            duties={expItem.duties}
                            startDate={expItem.startDate}
                            endDate={expItem.endDate}
                            canEdit={canEdit}
                            handleSetInputValue={updateInput}
                            handleSetTextAreaValue={updateTextArea}
                            handleDeleteExperience={deleteExperience}
                            handleAddDuty={addDuty}
                            handleDeleteDuty={deleteDuty}
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