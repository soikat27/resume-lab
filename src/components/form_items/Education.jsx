import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";
import {parse, isBefore, format} from "date-fns";
import EducationItem from "./utils/EducationItem.jsx";

export default function Education ({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [educationItems, setEducationItems] = useState((resumeData.education !== undefined) ? resumeData.education : []);
    const [canEdit, setCanEdit] = useState(resumeData.education === undefined || resumeData.education.length === 0);

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate all input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        form.querySelectorAll(".education-item").forEach(educationItem => {
            const institutionInput = educationItem.querySelector('[name="Institution Name"]');
            const degreeInput = educationItem.querySelector('[name="Degree"]');
            const locationInput = educationItem.querySelector('[name="Location"]');
            const startDateInput = educationItem.querySelector('[name="Start Date"]');
            const endDateInput = educationItem.querySelector('[name="End Date (Actual or Expected)"]');

            validateInputs(institutionInput, degreeInput, locationInput, startDateInput, endDateInput);
        });

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update resume data and go to next form
        const newData = educationItems.map(educationItem => {
            const startDate = parse(educationItem.startDate, "yyyy-MM", new Date());
            const formatedStartDate = format(startDate, "MMM yyyy");
            const endDate = parse(educationItem.endDate, "yyyy-MM", new Date());
            const formatedEndDate = format(endDate, "MMM yyyy");

            return {...educationItem, startDate: formatedStartDate, endDate: formatedEndDate};
        });
        setResumeData({ ...resumeData, education: newData});
        goToNextForm();
    }

    function validateInputs(institutionInput, degreeInput, locationInput, startDateInput, endDateInput) {
        // 1. enforce rule
        if (institutionInput.value.trim() === "")
            institutionInput.setCustomValidity("Institution name is required!");
        else if (degreeInput.value.trim() === "")
            degreeInput.setCustomValidity("Please write your degree name.");
        else if (locationInput.value.trim() === "")
            locationInput.setCustomValidity("Institution location is required!");
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

    function handleAddEducation() {
        const newEducationItem = {
            id: crypto.randomUUID(),
            institution: "",
            degree: "",
            location: "",
            startDate: "",
            endDate: ""
        };

        setEducationItems([...educationItems, newEducationItem]);
    }

    function updateInput(id, field, text) {
        const nextEducationItems = educationItems.map(educationItem => {
            if (educationItem.id === id)
                educationItem[field] = text;

            return educationItem;
        });

        setEducationItems(nextEducationItems);
    }

    function deleteEducation(id) {
        const nextEducationItems = educationItems.filter(educationItem => educationItem.id !== id);
        setEducationItems(nextEducationItems);
    }

    return (
        <form className="container education" onSubmit={handleSaveNext}>
            <div className="form-title">
                <h3>Education</h3>
                <button 
                    type="button" 
                    className="btn-add"
                    disabled={!canEdit}
                    onClick={handleAddEducation}
                >
                    +
                </button>
            </div>

            {
                educationItems.map((eduItem, index) => {
                    return (
                        <EducationItem 
                            id={eduItem.id} 
                            educationNo={index+1} 
                            institution={eduItem.institution} 
                            degree={eduItem.degree} 
                            location={eduItem.location} 
                            startDate={eduItem.startDate} 
                            endDate={eduItem.endDate}
                            canEdit={canEdit}
                            handleSetValue={updateInput} 
                            handleDelete={deleteEducation} 
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
