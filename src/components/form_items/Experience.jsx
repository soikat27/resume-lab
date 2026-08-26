import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";
import {parse, isBefore} from "date-fns";
import ExperienceItem from "./utils/ExperienceItem.jsx";

/**
 * Experience step: jobs with duties, then save into resumeData.
 */
export default function Experience({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [experienceItems, setExperienceItems] = useState((resumeData.experience !== undefined) ? resumeData.experience : []);
    const [canEdit, setCanEdit] = useState(resumeData.experience === undefined || resumeData.experience.length ===0);

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate all input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        form.querySelectorAll(".experience-item").forEach(experienceItem => {
            const positionInput = experienceItem.querySelector('[name="Position Title"]');
            const companyInput = experienceItem.querySelector('[name="Company Name"]');
            const locationInput = experienceItem.querySelector('[name="Location"]');
            const duty1Input = experienceItem.querySelector('[name="Duty 1"]');
            const startDateInput = experienceItem.querySelector('[name="Start Date"]');
            const endDateInput = experienceItem.querySelector('[name="End Date (Actual or Expected)"]');

            validateInputs(positionInput, companyInput, locationInput, duty1Input, startDateInput, endDateInput);
        });

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update resume data and go to next form
        const nextExperienceItems = experienceItems.map(experienceItem => {
            const filtered = experienceItem.duties.filter(duty => duty.string.trim().length > 0);
            return {...experienceItem, duties: filtered};
        });
        setResumeData({ ...resumeData, experience: nextExperienceItems});
        goToNextForm();
    }

    function validateInputs(positionInput, companyInput, locationInput, duty1Input, startDateInput, endDateInput) {
        // 1. enforce rule
        if (positionInput.value.trim() === "")
            positionInput.setCustomValidity("Please enter your position/title.");
        else if (companyInput.value.trim() === "")
            companyInput.setCustomValidity("Company name is required");
        else if (locationInput.value.trim() === "")
            locationInput.setCustomValidity("Company location is required!");
        else if (duty1Input.value.trim() === "")
            duty1Input.setCustomValidity("Please enter at least one job resposibility.");
        else if (startDateInput.value.trim() === "")
            startDateInput.setCustomValidity("Please enter a start date.");
        else if (endDateInput.value.trim() === "")
            endDateInput.setCustomValidity("Please enter your actual/anticipated end date.");
        else {
            const startDate = parse(startDateInput.value, "yyyy-MM", new Date());
            const endDate = parse(endDateInput.value, "yyyy-MM", new Date());
            if (isBefore(startDate, endDate) === false)
                endDateInput.setCustomValidity("End date cannot be before start date!");
        } 
    }

    function handleAddExperience() {
        const newExperienceItem = {
            id: crypto.randomUUID(),
            position: "",
            company: "",
            location: "",
            duties: [{id: crypto.randomUUID(), string: ""}],
            startDate: "",
            endDate: ""
        };

        setExperienceItems([...experienceItems, newExperienceItem]);
    }

    function deleteExperience(id) {
        const nextExperienceItems = experienceItems.filter(experienceItem => experienceItem.id !== id);
        setExperienceItems(nextExperienceItems);
    }

    function addDuty(experienceId) {
        const nextExperienceItems = experienceItems.map(item => {
            if (item.id === experienceId)
                item.duties.push({id: crypto.randomUUID(), string: ""});

            return item;
        });

        setExperienceItems(nextExperienceItems);
    }

    function deleteDuty(experienceId, dutyId) {
        const nextExperienceItems = experienceItems.map(item => {
            if (item.id === experienceId)
                item.duties = item.duties.filter(duty => duty.id !== dutyId);

            return item;
        });

        setExperienceItems(nextExperienceItems);
    }

    function updateInput(id, field, text) {
        const nextExperienceItems = experienceItems.map(experienceItem => {
            if (experienceItem.id === id)
                experienceItem[field] = text;

            return experienceItem;
        });

        setExperienceItems(nextExperienceItems);
    }

    function updateTextArea(id, dutyId, text) {
        const nextExperienceItems = experienceItems.map(experienceItem => {
            if (experienceItem.id === id)
                experienceItem.duties = experienceItem.duties.map(duty => {
                    if (duty.id === dutyId)
                        duty.string = text;

                    return duty;
                });

            return experienceItem;
        });

        setExperienceItems(nextExperienceItems);
    }

    return (
        <form className="container experience" onSubmit={handleSaveNext} noValidate>
            <div className="form-title">
                <h3>Experience</h3>
                <button type="button" className="btn-add" disabled={!canEdit} onClick={handleAddExperience}>+</button>
            </div>

            {
                experienceItems.map((expItem, index) => {
                    return (
                        <ExperienceItem
                            key={expItem.id}
                            id={expItem.id}
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