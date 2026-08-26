import SectionRail from "./SectionRail.jsx";
import Body from "./Body.jsx";
import GeneralInfo from "./form_items/GeneralInfo.jsx";
import Education from "./form_items/Education.jsx";
import Experience from "./form_items/Experience.jsx";
import Project from "./form_items/Project.jsx";
import TechnicalSkill from "./form_items/TechnicalSkill.jsx";
import Download from "./form_items/Download.jsx";

import "../styles/header.css";
import "../styles/footer.css";
import githubIcon from "../assets/icons/github-icon.svg";

import { useState } from "react";


export default function App() {
    const [activeFormIndex, setActiveFormIndex] = useState(0);

    const forms = [GeneralInfo, Education, Experience, Project, TechnicalSkill, Download];
    const CurrentForm = forms[activeFormIndex];

    function goToNextForm() {
        setActiveFormIndex(Math.min(activeFormIndex+1, forms.length-1));
    }
    function goToPrevForm() {
        setActiveFormIndex(Math.max(activeFormIndex-1, 0));
    }
    function resetFormIndex() {
        setActiveFormIndex(0);
    }

    return (
        <div className="main-container">
            <header>
                <div className="header-inner">
                    <div className="brand">
                        <span className="brand-resume">resume</span>
                        <span className="brand-lab">Lab</span>
                    </div>
                    <SectionRail activeFormIndex={activeFormIndex} />
                </div>
            </header>

            <Body 
                formInfo={{currentFormIndex: activeFormIndex, currentForm: CurrentForm, totalForms: forms.length}}
                goToNextForm={goToNextForm}
                goToPrevForm={goToPrevForm}
                resetFormIndex={resetFormIndex}
            />

            <footer>
                <p>© 2026 Soikat Saha. All rights reserved.</p>
                <a href="https://github.com/soikat27/resume-lab">
                    <img src={githubIcon} alt="" />
                    Source Code
                </a>
            </footer> 
        </div>
    );
}