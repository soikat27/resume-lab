import InputField from "./utils/InputField";
import ButtonGroup from "./utils/ButtonGroup";
import { useState } from "react";

export default function GeneralInfo({resumeData, setResumeData, goToNextForm, goToPrevForm}) {
    const [name, setName] = useState((resumeData.name !== undefined) ? resumeData.name : "");
    const [email, setEmail] = useState((resumeData.email !== undefined) ? resumeData.email : "");
    const [phone, setPhone] = useState((resumeData.phone !== undefined) ? resumeData.phone : "");
    const [linkedin, setLinkedin] = useState((resumeData.linkedin !== undefined) ? resumeData.linkedin : "");
    const [github, setGithub] = useState((resumeData.github !== undefined) ? resumeData.github : "");
    const [canEdit, setCanEdit] = useState(resumeData.name === undefined);

    function handleSaveNext(event) {
        // 0. prevent the form from submitting
        event.preventDefault();

        // 1. validate input fields – set custom validity. Report form validity.
        const form = event.currentTarget;
        validateName(form.elements["Full Name"]);
        validateEmail(form.elements["Email"]);
        validatePhone(form.elements["Phone"]);
        validateLinkedin(form.elements["LinkedIn"]);
        validateGithub(form.elements["GitHub"]);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. update resume data and go to next form
        const newData = {
            name,
            email,
            phone,
            linkedin,
            github,
        }
        
        setResumeData({...resumeData, ...newData});
        goToNextForm();
    }

    function validateName(input) {
        // 1. enforce rule
        if (name.trim() === "")
            input.setCustomValidity("Please enter a name!");
        else if (name.length < 2)
            input.setCustomValidity("Name must be at least 2 characters!");
        else if (name.length > 50)
            input.setCustomValidity("Name is too long!");  
    }
    function validateEmail(input) {
        // 1. enforce rule
        if (email.trim() !== "" && input.validity.typeMismatch)
            input.setCustomValidity("Please enter a valid email address!");
        else if (email.length > 100)
            input.setCustomValidity("Email is too long!");
    }
    function validatePhone(input) {
        // 1. enforce rule
        if (phone.trim() !== "" && phone.length > 25)
            input.setCustomValidity("Phone number is too long!");
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
        <form className="container gen_info" onSubmit={handleSaveNext} noValidate>
            <h3>General Information</h3>

            <InputField type="text" name="Full Name" placeHolder="ex. John Ryan" value={name} setValue={setName} canEdit={canEdit} />
            <InputField type="email" name="Email" placeHolder="ex. your_email@company.xyz" value={email} setValue={setEmail} canEdit={canEdit} />
            <InputField type="tel" name="Phone" placeHolder="ex. (xxx) xxx-xxxx" value={phone} setValue={setPhone} canEdit={canEdit} />

            <InputField type="text" name="LinkedIn" placeHolder="ex. linkedin.com/in/username" value={linkedin} setValue={setLinkedin} canEdit={canEdit} />
            <InputField type="text" name="GitHub" placeHolder="ex. github.com/username" value={github} setValue={setGithub} canEdit={canEdit} />

            <ButtonGroup 
                hasPrev={false}
                hasEdit={!canEdit}
                hasNext={true}
                handlePrev={goToPrevForm}
                setCanEdit={setCanEdit}
            />
        </form>
    );
}