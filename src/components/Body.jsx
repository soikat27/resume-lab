import GeneralInfo from "./forms/GeneralInfo.jsx";
import Links from "./forms/Links.jsx";
import Education from "./forms/Education.jsx";
import Experience from "./forms/Experience.jsx";
import Download from "./forms/Download.jsx";

import { useState } from "react";

export default function Body() {
    const [activeFormIndex, setActiveFormIndex] = useState(0);

    const sections = [GeneralInfo, Links, Education, Experience, Download];
    const CurrentForm = sections[activeFormIndex];
    const isFirstForm = (activeFormIndex === 0) ? true : false;
    const isLastForm = (activeFormIndex === sections.length-1) ? true : false;

    function nextForm() {
        setActiveFormIndex(Math.min(activeFormIndex+1, sections.length-1));
    }

    function prevForm() {
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
                <CurrentForm 
                    isFirst={isFirstForm} 
                    isLast={isLastForm}
                    nextFormHandler={nextForm}
                    prevFormHandler={prevForm} 
                />
            </div>
        </main>
    );
}