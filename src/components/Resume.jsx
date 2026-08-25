import HeaderPreview from "./resume_sections/HeaderPreview";
import EducationPreview from "./resume_sections/EducationPreview";
import ExperiencePreview from "./resume_sections/ExperiencePreview";
import ProjectPreview from "./resume_sections/ProjectPreview";

import "../styles/resume.css";

export default function Resume({resumeData}) {
    const {name, email, phone, linkedin, github} = resumeData;
    const headerInfo = {
        name,
        email,
        phone,
        linkedin,
        github
    };

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
