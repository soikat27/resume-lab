export default function HeaderPreview ({headerInfo}) {
    return (
        <div className="header-preview">
            <div className="title">
                {headerInfo.name && <p className="item large">{headerInfo.name}</p>}
            </div>
            <div className="subtitle">
                {headerInfo.phone && <p className="item regular">{headerInfo.phone}</p>}
                {headerInfo.email && <p className="item regular">{headerInfo.email}</p>}

                {headerInfo.linkedin && <p className="item regular link">{headerInfo.linkedin}</p>}
                {headerInfo.github && <p className="item regular link">{headerInfo.github}</p>}
            </div>
        </div>
    );
}
