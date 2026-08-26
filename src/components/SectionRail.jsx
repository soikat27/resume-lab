/**
 * Step labels in the header. Highlight only — not clickable.
 */
export default function SectionRail({activeFormIndex}) {
    const sections = ["General Information", "Education", "Experience", "Project", "Technical Skill", "Download"];
    
    return (
        <div className="section_rail">
            {sections.map((sectionName, index) => <div key={sectionName} className={`rail-item ${(activeFormIndex === index) ? "active" : ""}`}>{sectionName}</div>)}
        </div>
    );
}