import InputField from "./utils/InputField.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";
import { useState } from "react";

export default function Links ({setResumeData, goToNextForm, goToPrevForm}) {
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        validateLinkedin(form.elements["LinkedIn"]);
        validateGithub(form.elements["GitHub"]);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update states: parent component
        setIsSaved(true);
        const newData = {
            linkedin,
            github
        }
        setResumeData(previous => ({...previous, ...newData}));
        goToNextForm();
    }

    function validateLinkedin(input) {
        // 1. enforce rule
        if (linkedin.trim() !== "" && !linkedin.includes("linkedin.com"))
            input.setCustomValidity("Please enter a valid LinkedIn url!");
    }

    function validateGithub(input) {
        // 1. enforce rule
        if (github.trim() !== "" && !github.includes("github.com"))
            input.setCustomValidity("Please enter a valid GitHub url!");
    }

    return (
        <form className="container links" onSubmit={handleSaveNext} noValidate>
            <h3>Header Links</h3>

            <InputField type="text" name="LinkedIn" placeHolder="ex. www.linkedin.com/in/user_name" value={linkedin} setValue={setLinkedin} isSaved={isSaved} />
            <InputField type="text" name="GitHub" placeHolder="ex. www.github.com/user_name" value={github} setValue={setGithub} isSaved={isSaved} />

            <ButtonGroup 
                hasPrev={true}
                hasEdit={isSaved}
                hasNext={true}
                prevHandler={goToPrevForm}
                editHandler={setIsSaved}
            />
        </form>
    );
}