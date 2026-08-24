import ButtonGroup from "./utils/ButtonGroup.jsx";

export default function Download({resumeData, setResumeData, goToPrevForm}) {
    return (
        <div className="container download">
            <h3>Download Your Resume</h3>
            <p>Just a click away! Hit the download button below and have your resume handy.</p>
            <p>Go to previous sections to review and make necessary changes if desired.</p>

            <ButtonGroup 
                hasPrev={true}
                hasEdit={false}
                hasNext={false}
                handlePrev={goToPrevForm}
            />
        </div>
    );
}