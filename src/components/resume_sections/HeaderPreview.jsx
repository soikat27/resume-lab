export default function HeaderPreview ({personalInfo, links}) {
    return (
        <div className="header-preview">
            <div className="title">
                {personalInfo.fullname && <p>{personalInfo.fullname}</p>}
            </div>
            <div className="subtitle">
                {personalInfo.address && <p>{personalInfo.address}</p>}
                {personalInfo.phone && <p>{personalInfo.phone}</p>}
                {personalInfo.email && <p>{personalInfo.email}</p>}

                {links.linkedin && <p>{links.linkedin}</p>}
                {links.github && <p>{links.github}</p>}
            </div>
        </div>
    );
}