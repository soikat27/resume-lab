import InputField from "../InputField.jsx";
import ButtonGroup from "../ButtonGroup.jsx";

export default function Education (props) {
    return (
        <form className="container education">
            <h3>Education</h3>

            <InputField type="" name="Institution Name" />
            <InputField type="url" name="Degree" />
            <InputField type="url" name="Start Date" />
            <InputField type="url" name="End Date" />

            <ButtonGroup {...props}/>
        </form>
    );
}