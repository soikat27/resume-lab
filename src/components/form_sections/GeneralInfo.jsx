import InputField from "../InputField";
import ButtonGroup from "../ButtonGroup";

export default function GeneralInfo(props) {
    return (
        <form className="container gen_info">
            <h3>General Information</h3>

            <InputField type="text" name="Full Name" />
            <InputField type="text" name="Address" />
            <InputField type="email" name="Email" />
            <InputField type="tel" name="Phone" />

            <ButtonGroup {...props} />
        </form>
    );
}