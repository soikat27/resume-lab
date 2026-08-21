import InputField from "./utils/InputField.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";

export default function Links ({updateOnNext, ...rest}) {
    function nextForm(event) {
        // 0. prevent form from submitting
        event.preventDefault();

        const form = event.currentTarget;
        // 1. set custom validity -> validate current form
        linkedinValidity(form.elements["LinkedIn"]);
        githubValidity(form.elements["GitHub"]);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. get newData from the form inputs
        const formData = new FormData(form);
        const newData = {
            linkedin: formData.get("LinkedIn"),
            github: formData.get("GitHub")
        };

        // 3. update states in parent component
        updateOnNext(newData);
    }

    function linkedinValidity(input) {
        // 1. reset custom validity
        input.setCustomValidity("");

        // 2. enforce rule
        const url = input.value.trim();
        if (url !== "" && !url.includes("linkedin.com"))
            input.setCustomValidity("Please enter a valid LinkedIn url!");
    }

    function githubValidity(input) {
        // 1. reset custom validity
        input.setCustomValidity("");

        // 2. enforce rule
        const url = input.value.trim();
        if (url !== "" && !url.includes("github.com"))
            input.setCustomValidity("Please enter a valid GitHub url!");
    }

    return (
        <form className="container links" onSubmit={nextForm} noValidate>
            <h3>Header Links</h3>

            <InputField type="text" name="LinkedIn" placeHolder="ex. www.linkedin.com/in/user_name"/>
            <InputField type="text" name="GitHub" placeHolder="ex. www.github.com/user_name"/>

            <ButtonGroup {...rest}/>
        </form>
    );
}