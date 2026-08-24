import {parse, format} from "date-fns";

export default function ExperiencePreview ({experiences}) {
    if (!experiences)
        return;

    function formatedDate(dateString) {
        const dateObj = parse(dateString, "yyyy-MM", new Date());
        return format(dateObj, "MMM yyyy");
    }

    return (
        <div className="experience-preview">
            {(experiences.length > 0) && <div className="heading">Experience</div>}

            {experiences.map((experience) => {
                return (
                    <div className="experience-item">
                        <div className="first-line">
                            {experience.position && <p className="exp-name">{experience.position}</p>}
                            <div className="edu-date">
                                {experience.startDate && <p className="exp-start">{formatedDate(experience.startDate)}</p>}
                                –
                                {experience.endDate && <p className="exp-end">{formatedDate(experience.endDate)}</p>} 
                            </div>
                        </div>
                        <div className="last-line">
                            {experience.company && <p className="edu-degree">{experience.company}</p>}
                            {experience.location && <p className="edu-location">{experience.location}</p>}
                        </div>
                        <div className="duties">
                            <ul>
                                {experience.duties.map(duty => {
                                    return <li>{duty.string}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })} 
        </div>
    );
}