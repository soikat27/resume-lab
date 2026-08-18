import GeneralInfo from "./GeneralInfo";
import { useState } from "react";

export default function App() {
    const [resumeInfo, setResumeInfo] = useState({});
    const sections = ["General Information", "Links", "Education", "Experience", "Download"];
    return (
        <div className="main-container">
            <header className="header">
                <img src="#" alt="logo" />
                <div className="section_rail">
                    {sections.map(sectionName => <button>{sectionName}</button>)}
                </div>
            </header>
            <main>
                <div className="form">
                    <h3>{sections[0]}</h3>
                    <GeneralInfo isFirst={true}></GeneralInfo>
                </div>
                <div className="resume">
                    
                </div>
            </main>
            <footer>
                <p>All right reserved. Copyright @ 2026 - Soikat Saha</p>
                <a href="http://github.com/soikat27">
                    <img src="#" alt="github-icon" /> 
                    GitHub
                </a>
            </footer> 
        </div>
    );
}