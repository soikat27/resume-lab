import Header from "./app_sections/Header.jsx";

import GeneralInfo from "./form_sections/GeneralInfo";
import Links from "./form_sections/Links.jsx";
import Education from "./form_sections/Education.jsx";
import Experience from "./form_sections/Experience.jsx";
import Download from "./form_sections/Download.jsx";

import HeaderPreview from "./resume_sections/HeaderPreview.jsx";

import { useState } from "react";

import "../styles/sections.css";
import "../styles/inputField.css";
import "../styles/footer.css";
import githubIcon from "../assets/icons/github-icon.svg";

export default function App() {
    const sections = [GeneralInfo, Links, Education, Experience, Download];
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const CurrentSection = sections[activeSectionIndex];
    const isFirstSection = (activeSectionIndex === 0) ? true : false;
    const isLastSection = (activeSectionIndex === sections.length-1) ? true : false;

    return (
        <div className="main-container">
            <Header />
            
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
                        <CurrentSection 
                            isFirst={isFirstSection} 
                            isLast={isLastSection} 
                            onChangeHandler={setActiveSectionIndex} 
                            lastIndex={sections.length-1} />
                    </div>
                    <div className="resume">
                        {/* <HeaderPreview  /> */}
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2026 Soikat Saha. All rights reserved.</p>
                <a href="https://github.com/soikat27/resume-lab" aria-label="View source code on GitHub">
                    <img src={githubIcon} alt="" />
                    Source Code
                </a>
            </footer> 
        </div>
    );
}