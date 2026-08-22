import Resume from "./Resume.jsx";

import "../styles/sections.css";

import { useState } from "react";

export default function Body({formInfo, goToNextForm, goToPrevForm}) {
    const Form = formInfo.currentForm;

    
    const [resumeData, setResumeData] = useState({});

    return (
        <main>
            <div className="main-title">
                <div className="title">
                    <h2>Build your resume in {formInfo.totalForms} steps.</h2>
                    <button type="button" className="btn-secondary">Autofill</button>
                </div>
                <h4>Fill each section, preview on the right, download when you're done. <span className="jake-resume">Inspired from <a href="https://github.com/jakegut/resume">Jake's resume</a>.</span></h4>
            </div>
            <div className="main-body">
                <div className="form">
                    <Form 
                        setResumeData={setResumeData}
                        goToNextForm={goToNextForm}
                        goToPrevForm={goToPrevForm}
                    />
                </div>
                <Resume resumeInfo={resumeData} />
            </div>
        </main>
    );
}