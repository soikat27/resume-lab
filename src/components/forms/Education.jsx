import InputField from "./utils/InputField.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";

export default function Education (props) {
    return (
        <form className="container education">
            <h3>Education</h3>

            <InputField type="text" name="Institution Name" />
            <InputField type="text" name="Degree" />
            <InputField type="date" name="Start Date" />
            <InputField type="date" name="End Date" />

            <ButtonGroup {...props}/>
        </form>
    );
}