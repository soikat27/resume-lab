import {parse, format} from "date-fns";

/**
 * Preview Education section (Jake two-line school headings).
 */
export default function EducationPreview ({educations}) {
    if (!educations)
        return;

    function formatedDate(dateString) {
        const dateObj = parse(dateString, "yyyy-MM", new Date());
        return format(dateObj, "MMM yyyy");
    }

    return (
        <div className="education-preview">
            {(educations.length > 0) && <div className="heading">Education</div>}

            {educations.map((education) => {
                return (
                    <div key={education.id} className="education-item">
                        <div className="first-line">
                            {education.institution && <p className="edu-name">{education.institution}</p>}
                            {education.location && <p className="edu-location">{education.location}</p>}
                        </div>
                        <div className="last-line">
                            {education.degree && <p className="edu-degree">{education.degree}</p>}
                            <div className="edu-date">
                                {education.startDate && <p className="edu-start">{formatedDate(education.startDate)}</p>}
                                –
                                {education.endDate && <p className="edu-end">{formatedDate(education.endDate)}</p>}
                            </div>
                        </div>
                    </div> 
                );
            })} 
        </div>
    );
}