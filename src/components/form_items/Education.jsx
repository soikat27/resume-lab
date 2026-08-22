import InputField from "./utils/InputField.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";
import {parse, isBefore, format} from "date-fns";

export default function Education ({setResumeData, goToNextForm, goToPrevForm}) {
    const [institution, setInstitution] = useState("");
    const [degree, setDegree] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [hasItem, setHasItem] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    function handleSaveNext(event) {
        handleAddEducation(event);
        goToNextForm();
    }

    // function nextForm(event) {
    //     // 0. prevent form from submitting
    //     event.preventDefault();

    //     const form = event.currentTarget;
    //     // check if list or single element
    //     // 1. set custom validity -> validate current form
    //     if (form.elements["Institution Name"].length === undefined)
    //         inputValidity(form.elements["Institution Name"], form.elements["Degree"], form.elements["Location"], form.elements["Start Date"], form.elements["End Date (Actual or Expected)"]);
    //     else {
    //         const nameInputs = [...form.elements["Institution Name"]];
    //         const degreeInputs = [...form.elements["Degree"]];
    //         const locationInputs = [...form.elements["Location"]];
    //         const startInputs = [...form.elements["Start Date"]];
    //         const endInputs = [...form.elements["End Date (Actual or Expected)"]];

    //         for (let i = 0; i < nameInputs.length; i++)
    //             inputValidity(nameInputs[i], degreeInputs[i], locationInputs[i], startInputs[i], endInputs[i]);
    //     }

    //     if (!form.checkValidity()) {
    //         form.reportValidity();
    //         return;
    //     }

    //     // 2. get newData from the form inputs
    //     const formData = new FormData(form);
    //     const names = formData.getAll("Institution Name");
    //     const degrees = formData.getAll("Degree");
    //     const locations = formData.getAll("Location");
    //     const starts = formData.getAll("Start Date");
    //     const ends = formData.getAll("End Date (Actual or Expected)");

    //     const educations = [];
    //     for (let i = 0; i < names.length; i++) {
    //         const startDate = parse(starts[i], "yyyy-MM", new Date());
    //         const endDate = parse(ends[i], "yyyy-MM", new Date());

    //         const entry = {
    //             name: names[i],
    //             degree: degrees[i],
    //             location: locations[i],
    //             start: format(startDate, "MMM yyyy"),
    //             end: format(endDate, "MMM yyyy")   
    //         };
    //         educations.push(entry);
    //     }
        
    //     const newData = {
    //         education: educations
    //     }

    //     // 3. update states in parent component
    //     updateOnNext(newData);
    // }

    function validateInputs(institutionInput, degreeInput, locationInput, startDateInput, endDateInput) {
        // 1. enforce rule
        if (institution.trim() === "")
            institutionInput.setCustomValidity("Institution name is required!");
        else if (degree.trim() === "")
            degreeInput.setCustomValidity("Please write your degree name.");
        else if (location.trim() === "")
            locationInput.setCustomValidity("Institution location is required!");
        else if (startDate.trim() === "")
            startDateInput.setCustomValidity("Please enter a start date.");
        else if (endDate.trim() === "")
            endDateInput.setCustomValidity("Please enter your actual/anticipated end date.");
        else {
            const startDateObj = parse(startDate.trim(), "yyyy-MM", new Date());
            const endDateObj = parse(endDate.trim(), "yyyy-MM", new Date());
            if (isBefore(startDateObj, endDateObj) === false)
                endDateInput.setCustomValidity("End date cannot be before start date!");
        } 
    }

    function handleAddEducation(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        validateInputs(form.elements["Institution Name"], form.elements["Degree"], form.elements["Location"], form.elements["Start Date"], form.elements["End Date (Actual or Expected)"]);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update states: parent component. go to next form
        setIsSaved(true);
        const newData = {
            education: []
        };
        const newEducation = {
            institution,
            degree,
            location,
            startDate: format(startDate, "MMM yyyy"),
            endDate: format(endDate, "MMM yyyy")
        }

        setResumeData(previous => {
            const prevEducations = previous.education;
            if (prevEducations !== undefined)
                newData.education.push(...prevEducations);

            newData.push(newEducation);
            return {...previous, ...newData};
        });
    }
    function handleDeleteEducation() {
        setHasItem(false);
    }

    return (
        <form className="container education" onSubmit={handleSaveNext}>
            <div className="form-title">
                <h3>Education</h3>
                <button type="submit" className="btn-add" onClick={handleAddEducation}>+</button>
            </div>
            {hasItem && (
                <div className="education-item">
                    <div className="edu-chunk-header">
                        <p className="edu-chunk-title">Add a new education</p>
                        <button type="button" className="btn-delete" onClick={handleDeleteEducation}>
                            –
                        </button>
                    </div>

                    <div className="inputs">
                        <InputField type="text" name="Institution Name" placeHolder="ex. Gettysburg College" value={institution} setValue={setInstitution} isSaved={isSaved} />
                        <InputField type="text" name="Degree" placeHolder="ex. B.Sc. in Computer Science" value={degree} setValue={setDegree} isSaved={isSaved} />
                        <InputField type="text" name="Location" placeHolder="ex. Gettysburg, PA" value={location} setValue={setLocation} isSaved={isSaved} />
                        <InputField type="month" name="Start Date" placeHolder="ex. Jan 2007 (MMM yyyy)" value={startDate} setValue={setStartDate} isSaved={isSaved} />
                        <InputField type="month" name="End Date (Actual or Expected)" placeHolder="ex. May 2011 (MMM yyyy)" value={endDate} setValue={setEndDate} isSaved={isSaved} />
                    </div>
                </div>
            )}
            
            <ButtonGroup 
                hasPrev={true}
                hasEdit={isSaved}
                hasNext={true}
                prevHandler={goToPrevForm}
                editHandler={setIsSaved}
            />
        </form>
    );
}