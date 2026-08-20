import InputField from "./utils/InputField";
import ButtonGroup from "./utils/ButtonGroup";

export default function GeneralInfo(props) {
    return (
        <form className="container gen_info">
            <h3>General Information</h3>

            <InputField type="text" name="Full Name" placeHolder="ex. John Ryan" />
            <InputField type="text" name="Address" placeHolder="ex. 123 Main Street, Anytown, CA 91234"/>
            <InputField type="email" name="Email" placeHolder="ex. your_email@company.xyz"/>
            <InputField type="tel" name="Phone" placeHolder="ex. (xxx) xxx-xxxx" />

            <ButtonGroup {...props} />
        </form>
    );
}