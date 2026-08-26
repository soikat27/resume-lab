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

    return (
        <main>
            <div className="main-title">
                <div className="title">
                    <h2>Build your resume in {formInfo.totalForms} steps.</h2>
                    <button type="button" className="btn-secondary" onClick={handleAutofill} >Autofill</button>
                </div>
                <h4>Fill each section, preview on the right, download when you're done. <span className="jake-resume">Inspired from <a href="https://github.com/jakegut/resume">Jake's resume</a>.</span></h4>
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