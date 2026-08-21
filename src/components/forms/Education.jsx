import EducationChunk from "./utils/EducationChunk.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";
import {parse, isBefore, format} from "date-fns";

export default function Education ({updateOnNext, ...rest}) {
    const [educationIds, setEducationIds] = useState([]);

    function nextForm(event) {
        // 0. prevent form from submitting
        event.preventDefault();

        const form = event.currentTarget;
        // check if list or single element
        // 1. set custom validity -> validate current form
        if (form.elements["Institution Name"].length === undefined)
            inputValidity(form.elements["Institution Name"], form.elements["Degree"], form.elements["Location"], form.elements["Start Date"], form.elements["End Date (Actual or Expected)"]);
        else {
            const nameInputs = [...form.elements["Institution Name"]];
            const degreeInputs = [...form.elements["Degree"]];
            const locationInputs = [...form.elements["Location"]];
            const startInputs = [...form.elements["Start Date"]];
            const endInputs = [...form.elements["End Date (Actual or Expected)"]];

            for (let i = 0; i < nameInputs.length; i++)
                inputValidity(nameInputs[i], degreeInputs[i], locationInputs[i], startInputs[i], endInputs[i]);
        }

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. get newData from the form inputs
        const formData = new FormData(form);
        const names = formData.getAll("Institution Name");
        const degrees = formData.getAll("Degree");
        const locations = formData.getAll("Location");
        const starts = formData.getAll("Start Date");
        const ends = formData.getAll("End Date (Actual or Expected)");

        const educations = [];
        for (let i = 0; i < names.length; i++) {
            const startDate = parse(starts[i], "yyyy-MM", new Date());
            const endDate = parse(ends[i], "yyyy-MM", new Date());

            const entry = {
                name: names[i],
                degree: degrees[i],
                location: locations[i],
                start: format(startDate, "MMM yyyy"),
                end: format(endDate, "MMM yyyy")   
            };
            educations.push(entry);
        }
        
        const newData = {
            education: educations
        }

        // 3. update states in parent component
        updateOnNext(newData);
    }

    function inputValidity(name, degree, location, start, end) {
        // 1. reset custom validity
        name.setCustomValidity("");
        degree.setCustomValidity("");
        location.setCustomValidity("");
        start.setCustomValidity("");
        end.setCustomValidity("");

        // 2. enforce rule
        if (name.value.trim() === "")
            name.setCustomValidity("Institution name is required!");
        else if (degree.value.trim() === "")
            degree.setCustomValidity("Please write your degree name.");
        else if (location.value.trim() === "")
            location.setCustomValidity("Institution location is required!");
        else if (start.value === "")
            start.setCustomValidity("Please enter a start date.");
        else if (end.value === "")
            end.setCustomValidity("Please enter your actual/anticipated end date.");
        else {
            const startDate = parse(start.value, "yyyy-MM", new Date());
            const endDate = parse(end.value.trim(), "yyyy-MM", new Date());
            if (isBefore(startDate, endDate) === false)
                end.setCustomValidity("End date cannot be before start date!");
        } 
    }

    function addEducation() {
        setEducationIds(previous => [...previous, crypto.randomUUID()]);
    }

    function deleteEducation(id) {
        const newIds = educationIds.filter(eduId => eduId !== id);
        setEducationIds(newIds);
    }

    return (
        <form className="container education" onSubmit={nextForm}>
            <div className="form-title">
                <h3>Education</h3>
                <button type="button" className="btn-add" onClick={addEducation}>+</button>
            </div>
            
            {educationIds.map((EducationId, index) => (
                <EducationChunk key={EducationId} id={EducationId} count={index + 1} deleteEducation={deleteEducation}/>
            ))}

            <ButtonGroup {...rest}/>
        </form>
    );
}