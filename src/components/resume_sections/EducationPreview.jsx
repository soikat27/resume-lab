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
                            {education.name && <p className="edu-name">{education.name}</p>}
                            {education.location && <p className="edu-location">{education.location}</p>}
                        </div>
                        <div className="last-line">
                            {education.degree && <p className="edu-degree">{education.degree}</p>}
                            <div className="edu-date">
                                {education.start && <p className="edu-start">{education.start}</p>}
                                –
                                {education.start && <p className="edu-end">{education.end}</p>}
                            </div>
                            
                        </div>
                    </div> 
                );
            })} 
        </div>
    );
}