/**
 * Preview Technical Skills: bold category labels and comma-separated lists.
 */
export default function TechnicalSkillPreview({technicalSkills}) {
    function hasTechnicalSkills() {
        return (technicalSkills.languages !== undefined) && ((technicalSkills.languages.length > 0) || (technicalSkills.frameworks.length > 0) && (technicalSkills.devTools.length > 0) && (technicalSkills.libraries.length > 0));
    }
    
    return (
        <div className="technical-skill-preview">
            {
                ((hasTechnicalSkills()) && (
                    <>
                        <div className="heading">Technical Skills</div>
                        <div className="items">
                            {technicalSkills.languages && (
                                <div className="skill-line">
                                    <p className="label">Languages</p>
                                    <p className="item">{technicalSkills.languages}</p>
                                </div>
                            )}
                            {technicalSkills.frameworks && (
                                <div className="skill-line">
                                    <p className="label">Frameworks</p>
                                    <p className="item">{technicalSkills.frameworks}</p>
                                </div>
                            )}
                            {technicalSkills.devTools && (
                                <div className="skill-line">
                                    <p className="label">Developer Tools</p>
                                    <p className="item">{technicalSkills.devTools}</p>
                                </div>
                            )}
                            {technicalSkills.libraries && (
                                <div className="skill-line">
                                    <p className="label">Libraries</p>
                                    <p className="item">{technicalSkills.libraries}</p>
                                </div>
                            )}
                        </div>
                    </>
                ))
            }
        </div>
    );
}
