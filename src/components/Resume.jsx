import HeaderPreview from "./resume_sections/HeaderPreview";
import EducationPreview from "./resume_sections/EducationPreview";
import ExperiencePreview from "./resume_sections/ExperiencePreview"

import "../styles/resume.css";

export default function Resume({resumeData}) {
    const {name, email, phone, linkedin, github} = resumeData;
    const personalInfo = {
        name,
        email,
        phone
    };
    const links = {
        linkedin,
        github
    };

    return (
        <div className="resume">
            <div className="resume-page">
                <HeaderPreview personalInfo={personalInfo} links={links} />
                <EducationPreview educations={resumeData.education} />
                <ExperiencePreview experiences={resumeData.experience} />
            </div>
        </div>
    );
}
