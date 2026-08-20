import SectionRail from "../SectionRail.jsx";

import "../../styles/header.css";

export default function Header() {
    return (
        <header>
            <div className="header-inner">
                <div className="brand">
                    <span className="brand-resume">resume</span>
                    <span className="brand-lab">Lab</span>
                </div>
                <SectionRail />
            </div>
        </header>
    );
}