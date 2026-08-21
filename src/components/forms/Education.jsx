import EducationChunk from "./utils/EducationChunk.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";

export default function Education ({updateOnNext, ...rest}) {
    const [educationIds, setEducationIds] = useState([]);

    function nextForm() {
        
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