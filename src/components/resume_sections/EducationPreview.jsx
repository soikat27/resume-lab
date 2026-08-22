export default function EducationPreview ({educations}) {
    if (!educations)
        return;

    return (
        <div className="education-preview">
            {(educations.length > 0) && <div className="heading">Education</div> }

            {educations.map((education) => {
                return (
                    <div className="education-item">
                        <div className="first-line">
                            {education.institution && <p className="edu-name">{education.institution}</p>}
                            {education.location && <p className="edu-location">{education.location}</p>}
                        </div>
                        <div className="last-line">
                            {education.degree && <p className="edu-degree">{education.degree}</p>}
                            <div className="edu-date">
                                {education.startDate && <p className="edu-start">{education.startDate}</p>}
                                –
                                {education.endDate && <p className="edu-end">{education.endDate}</p>}
                            </div>
                            
                        </div>
                    </div> 
                );
            })} 
        </div>
    );
}