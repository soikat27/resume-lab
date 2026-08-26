import ButtonGroup from "./utils/ButtonGroup.jsx";

import "../../styles/download.css";

export default function Download({resumeData, goToPrevForm}) {
    function downloadResume() {
        // 1. show print windown
        window.print()
    }

    function handleSave() {
        // 1. stringify resume into JSON
        const resumeString = JSON.stringify(resumeData);

        // 2. create a blob
        const blob = new Blob([resumeString], {type: "application/json"})

        // 3. create a temporary url
        const url = URL.createObjectURL(blob);

        // 4. create a virtual link
        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.json";
        link.click();
    }

    return (
        <div className="container download">
            <h3>Download Your Resume</h3>
            <p>Review the resume preview thoroughly! Go to previous sections to make necessary changes if desired.</p>
            <div className="save">
                <p>Before you hit <span>Download</span>, save a JSON copy of your data on your device. You can load it later instead of typing everything again.</p>
                <button className="btn-secondary btn-save" onClick={handleSave}>Save Data</button>
            </div>
            <p>When the file is saved, hit the download button below and have your resume handy.</p>

            <ButtonGroup 
                hasPrev={true}
                hasEdit={false}
                hasNext={false}
                handlePrev={goToPrevForm}
                handleDownload={downloadResume}
            />
        </div>
    );
}