import GeneralInfo from "./GeneralInfo";

export default function App() {
    const sections = ["General Information", "Links", "Education", "Experience", "Download"];
    return (
        <>
            <div className="section_rail">
                {sections.map(sectionName => <button>{sectionName}</button>)}
            </div>
            <div className="form">
                <h3>{sections[0]}</h3>
                <GeneralInfo isFirst={true}></GeneralInfo>
            </div>
            <div className="resume">

            </div>
        </>
    );
}