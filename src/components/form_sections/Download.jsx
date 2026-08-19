import ButtonGroup from "../ButtonGroup.jsx";

export default function Download(props) {
    return (
        <div className="container download">
            <h3>Download Your Resume</h3>

            <ButtonGroup {...props} />
        </div>
    );
}