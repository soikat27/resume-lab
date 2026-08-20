import SectionRail from "./SectionRail.jsx";
import Body from "./Body.jsx";

import "../styles/header.css";
import "../styles/footer.css";
import githubIcon from "../assets/icons/github-icon.svg";

import { useState } from "react";

export default function App() {
    const [activeFormIndex, setActiveFormIndex] = useState(0);
    
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
                activeFormIndex={activeFormIndex}
                setActiveFormIndex={setActiveFormIndex}
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