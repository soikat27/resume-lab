import InputField from "./utils/InputField";
import ButtonGroup from "./utils/ButtonGroup";
import { useState } from "react";

export default function TechnicalSkill({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [languages, setLanguages] = useState((resumeData.languages !== undefined) ? resumeData.languages : "");
    const [frameworks, setFrameworks] = useState((resumeData.frameworks !== undefined) ? resumeData.frameworks : "");
    const [devTools, setDevTools] = useState((resumeData.devTools !== undefined) ? resumeData.devTools : "");
    const [libraries, setLibraries] = useState((resumeData.linkedin !== undefined) ? resumeData.linkedin : "");

    const [canEdit, setCanEdit] = useState((resumeData.languages === undefined) || ((resumeData.languages.length === 0) && (resumeData.frameworks.length === 0) && (resumeData.devTools.length === 0) && (resumeData.languages.libraries === 0)));

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. update resume data and go to next form
        const newData = {
            languages: languages.trim(),
            frameworks: frameworks.trim(),
            devtools: devTools.trim(),
            libraries: libraries.trim()
        }
        
        setResumeData({...resumeData, ...newData});
        goToNextForm();
    }

    return (
        <form className="container tech_skills" onSubmit={handleSaveNext} noValidate>
            <h3>Technical Skill</h3>

            <InputField type="textarea" name="Programming Languages" placeHolder="ex. Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R" value={languages} setValue={setLanguages} canEdit={canEdit} />
            <InputField type="textarea" name="Frameworks" placeHolder="ex. React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI" value={frameworks} setValue={setFrameworks} canEdit={canEdit} />
            <InputField type="textarea" name="Developer Tools" placeHolder="ex. Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse" value={devTools} setValue={setDevTools} canEdit={canEdit} />
            <InputField type="textarea" name="Libraries" placeHolder="ex. pandas, NumPy, Matplotlib" value={libraries} setValue={setLibraries} canEdit={canEdit} />

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