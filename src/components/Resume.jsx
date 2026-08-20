import HeaderPreview from "./resume_sections/HeaderPreview";

import "../styles/resume.css";

export default function Resume({resumeInfo}) {
    const {fullname, address, email, phone, linkedin, github} = resumeInfo;
    const personalInfo = {
        fullname,
        address,
        email,
        phone
    };
    const links = {
        linkedin,
        github
    };

    return (
        <div className="resume">
            <HeaderPreview personalInfo={personalInfo} links={links} />
        </div>
    );
}