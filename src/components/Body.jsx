import GeneralInfo from "./forms/GeneralInfo.jsx";
import Links from "./forms/Links.jsx";
import Education from "./forms/Education.jsx";
import Experience from "./forms/Experience.jsx";
import Download from "./forms/Download.jsx";
import Resume from "./Resume.jsx";

import "../styles/sections.css";

import { useState } from "react";

export default function Body({activeFormIndex, setActiveFormIndex}) {
    const sections = [GeneralInfo, Links, Education, Experience, Download];
    const CurrentForm = sections[activeFormIndex];
    const isFirstForm = (activeFormIndex === 0) ? true : false;
    const isLastForm = (activeFormIndex === sections.length-1) ? true : false;

    const [resumeInfo, setResumeInfo] = useState({});

    function nextForm(event) {
        // 1. get form data
        const form = event.target;
        const formData = new FormData(form);

        // 2. populate wih new info
        setResumeInfo((previous) => {
            const fullname = formData.get("Full Name");
            const email = formData.get("Email");
            const phone = formData.get("Phone");
            return {...previous, fullname: fullname, email: email, phone:phone}
        });

        // 3. go to next section
        setActiveFormIndex(Math.min(activeFormIndex+1, sections.length-1));
    }

    function prevForm() {
        // 1. go to previous form
        setActiveFormIndex(Math.max(activeFormIndex-1, 0));
    }

    return (
        <main>
            <div className="main-title">
                <div className="title">
                    <h2>Build your resume in {sections.length} steps.</h2>
                    <button type="button" className="btn-secondary">Autofill</button>
                </div>
                <h4>Fill each section, preview on the right, download when you're done. <span className="jake-resume">Inspired from <a href="https://github.com/jakegut/resume">Jake's resume</a>.</span></h4>
            </div>
            <div className="main-body">
                <div className="form">
                    <CurrentForm 
                        isFirst={isFirstForm} 
                        isLast={isLastForm}
                        nextForm={nextForm}
                        prevForm={prevForm}
                    />
                </div>
                <Resume resumeInfo={resumeInfo} />
            </div>
        </main>
    );
}