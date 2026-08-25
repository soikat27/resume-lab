export default function HeaderPreview ({headerInfo}) {
    return (
        <div className="header-preview">
            <div className="title">
                {headerInfo.name && <p className="item large">{headerInfo.name}</p>}
            </div>
            <div className="subtitle">
                {headerInfo.phone && <p className="item regular">{headerInfo.phone}</p>}
                {headerInfo.email && <p className="item regular">{headerInfo.email}</p>}

                {headerInfo.linkedin &&  <a className="item regular link" href={(headerInfo.linkedin.startsWith("http")) ? headerInfo.linkedin : "https://"+headerInfo.linkedin} target="_blank" rel="noopener noreferrer">{headerInfo.linkedin}</a>}
                {headerInfo.github && <a className="item regular link" href={(headerInfo.github.startsWith("http")) ? headerInfo.github : "https://"+headerInfo.github} target="_blank" rel="noopener noreferrer">{headerInfo.github}</a>}
            </div>
        </div>
    );
}
