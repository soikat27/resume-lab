import GeneralInfo from "./GeneralInfo";

export default function App() {
    const sections = ["General Info", "Links", "Education", "Experience", "Download"];
    return (
        <>
            <div className="section_rail">
                {sections.map(sectionName => <button>{sectionName}</button>)}
            </div>
            <div className="form">
                <GeneralInfo></GeneralInfo>
            </div>
            <div className="resume">

            </div>
        </>
    );
}