import InputField from "../InputField.jsx";
import ButtonGroup from "../ButtonGroup.jsx";

export default function Links (props) {
    return (
        <form className="container links">
            <h3>Header Links</h3>

            <InputField type="url" name="LinkenIn" />
            <InputField type="url" name="GitHub" />
            <InputField type="url" name="Portfolio Website" />

            <ButtonGroup {...props}/>
        </form>
    );
}