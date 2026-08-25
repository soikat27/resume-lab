import HeaderPreview from "./resume_sections/HeaderPreview.jsx";
import EducationPreview from "./resume_sections/EducationPreview.jsx";
import ExperiencePreview from "./resume_sections/ExperiencePreview.jsx";
import ProjectPreview from "./resume_sections/ProjectPreview.jsx";
import TechnicalSkill from "./form_items/TechnicalSkill.jsx";

import "../styles/resume.css";

export default function Resume({resumeData}) {
    const {name, email, phone, linkedin, github, languages, frameworks, devTools, libraries} = resumeData;
    const headerInfo = {
        name,
        email,
        phone,
        linkedin,
        github
    };
    const technicalSkills = {
        languages,
        frameworks,
        devTools,
        libraries
    }

    return (
        <div className="resume">
            <div className="resume-page">
                <HeaderPreview headerInfo={headerInfo} />
                <EducationPreview educations={resumeData.education} />
                <ExperiencePreview experiences={resumeData.experience} />
                <ProjectPreview projects={resumeData.project} />
            </div>
        </div>
    );
}
