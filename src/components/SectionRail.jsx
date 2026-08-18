import { useState } from "react";

export default function SectionRail() {
    const sections = ["General Information", "Links", "Education", "Experience", "Download"];
    const [selected, setSelected] = useState(sections[0]);
    
    return (
        <div className="section_rail">
            {sections.map(sectionName => <div>{sectionName}</div>)}
        </div>
    );
}