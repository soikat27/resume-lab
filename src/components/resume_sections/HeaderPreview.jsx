export default function HeaderPreview ({personalInfo, links}) {
    return (
        <div className="header-preview">
            <div className="title">
                {personalInfo.fullname && <p className="item large">{personalInfo.fullname}</p>}
            </div>
            <div className="subtitle">
                {personalInfo.phone && <p className="item regular">{personalInfo.phone}</p>}
                {personalInfo.email && <p className="item regular">{personalInfo.email}</p>}

                {links.linkedin && <p className="item regular link">{links.linkedin}</p>}
                {links.github && <p className="item regular link">{links.github}</p>}
            </div>
        </div>
    );
}
