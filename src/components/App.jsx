import GeneralInfo from "./form_sections/GeneralInfo";

export default function App() {
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