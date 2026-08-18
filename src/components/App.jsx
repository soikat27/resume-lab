import GeneralInfo from "./form_sections/GeneralInfo";
import SectionRail from "./SectionRail.jsx";

export default function App() {
    return (
        <div className="main-container">
            <header className="header">
                <img src="#" alt="logo" />
                <SectionRail />
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