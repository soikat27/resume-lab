import Resume from "./Resume.jsx";

import sampleResumeData from "../assets/sample-resume-data.json"
import "../styles/sections.css";

import { useState } from "react";

export default function Body({formInfo, goToNextForm, goToPrevForm, resetFormIndex}) {
    const Form = formInfo.currentForm;

    const [resumeData, setResumeData] = useState({});
    const [formKey, setFormKey] = useState(0);

    function handleAutofill() {
        setResumeData(sampleResumeData);
        resetFormIndex();
        setFormKey(previous => previous+1);
    }

    function handleLoadResume(event) {
        // 1. get the file 
        const file = event.target.files[0];

        // 2. read the file
        const reader = new FileReader();
        reader.onload = () => {
            const resumeJSON = reader.result;
            const resumeData = JSON.parse(resumeJSON);

            setResumeData(resumeData);

            // reset form index
            resetFormIndex();
            setFormKey(previous => previous+1);
        }
        reader.readAsText(file);
    }

    return (
        <main>
            <div className="main-title">
                <div className="title">
                    <h2>Build your resume in {formInfo.totalForms} steps.</h2>
                    <div className="title-actions">
                        <button type="button" className="btn-secondary" onClick={handleAutofill}>Autofill</button>
                        <label className="btn-secondary btn-load">
                            Load Data
                            <input type="file" accept=".json" onChange={handleLoadResume} />
                        </label>
                    </div>
                    
                </div>
                <h4>Fill each section, preview on the right, download when you're done. <span className="jake-resume">Inspired by <a href="https://github.com/jakegut/resume" target="_blank" rel="noopener noreferrer">Jake's resume</a>.</span></h4>
                <p><span>Caution: </span>Load only a JSON file saved from <span>resumeLab</span>. Other files will not work.</p>
            </div>
            <div className="main-body">
                <div className="form">
                    <Form
                        key={formKey}
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                        goToNextForm={goToNextForm}
                        goToPrevForm={goToPrevForm}
                    />
                </div>
                <Resume resumeData={resumeData} />
            </div>
        </main>
    );
}