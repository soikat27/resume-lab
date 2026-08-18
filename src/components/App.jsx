import GeneralInfo from "./form_sections/GeneralInfo";
import SectionRail from "./SectionRail.jsx";
import "../styles/header.css";

export default function App() {
    return (
        <div className="main-container">
            <header>
                <div className="header-inner">
                    <div className="brand" aria-label="resumeLab">
                        <span className="brand-resume">resume</span>
                        <span className="brand-lab">Lab</span>
                    </div>
                    <SectionRail />
                </div>
            </header>
            <main>
                <div className="form">
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