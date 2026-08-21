import HeaderPreview from "./resume_sections/HeaderPreview";
import EducationPreview from "./resume_sections/EducationPreview";

import "../styles/resume.css";

export default function Resume({resumeInfo}) {
    const {fullname, email, phone, linkedin, github} = resumeInfo;
    const personalInfo = {
        fullname,
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
                <EducationPreview educations={resumeInfo.education}/>
            </div>
        </div>
    );
}
