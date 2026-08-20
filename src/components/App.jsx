import SectionRail from "./SectionRail.jsx";
import Body from "./Body.jsx";

import "../styles/header.css";
import "../styles/sections.css";
import "../styles/inputField.css";
import "../styles/footer.css";
import githubIcon from "../assets/icons/github-icon.svg";

export default function App() {
    return (
        <div className="main-container">
            <header>
                <div className="header-inner">
                    <div className="brand">
                        <span className="brand-resume">resume</span>
                        <span className="brand-lab">Lab</span>
                    </div>
                    <SectionRail />
                </div>
            </header>

            <Body />

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