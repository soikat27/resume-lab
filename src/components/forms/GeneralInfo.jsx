import InputField from "./utils/InputField";
import ButtonGroup from "./utils/ButtonGroup";

export default function GeneralInfo({updateOnNext, ...rest}) {
    function nextForm(event) {
        // 0. prevent form from submitting
        event.preventDefault();

        const form = event.currentTarget;
        // 1. set custom validity -> validate current form
        nameValidity(form.elements["Full Name"]);
        emailValidity(form.elements["Email"]);
        phoneValidity(form.elements["Phone"]);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // 2. get newData from the form inputs
        const formData = new FormData(form);
        const newData = {
            fullname: formData.get("Full Name"),
            email: formData.get("Email"),
            phone: formData.get("Phone"),
        };

        // 3. update states in parent component
        updateOnNext(newData);
    }

    function nameValidity(input) {
        // 1. reset custom validity
        input.setCustomValidity("");

        // 2. enforce rule
        const name = input.value.trim();
        if (name === "")
            input.setCustomValidity("Please enter a name!");
        else if (name.length < 2)
            input.setCustomValidity("Name must be at least 2 characters!");
        else if (name.length > 50)
            input.setCustomValidity("Name is too long!");  
    }

    function emailValidity(input) {
        // 1. reset custom validity
        input.setCustomValidity("");

        // 2. enforce rule
        const email = input.value.trim();
        if (email !== "" && input.validity.typeMismatch)
            input.setCustomValidity("Please enter a valid email address!");
        else if (email.length > 100)
            input.setCustomValidity("Email is too long!");
    }

    function phoneValidity(input) {
        // 1. reset custom validity
        input.setCustomValidity("");

        // 2. enforce rule
        const phone = input.value.trim();
        if (phone !== "" && phone.length > 25)
            input.setCustomValidity("Phone number is too long!");
    }

    return (
        <form className="container gen_info" onSubmit={nextForm} noValidate>
            <h3>General Information</h3>

            <InputField type="text" name="Full Name" placeHolder="ex. John Ryan" />
            <InputField type="email" name="Email" placeHolder="ex. your_email@company.xyz"/>
            <InputField type="tel" name="Phone" placeHolder="ex. (xxx) xxx-xxxx" />

            <ButtonGroup {...rest} />
        </form>
    );
}