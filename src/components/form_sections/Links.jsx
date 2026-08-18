import InputField from "../InputField.jsx";
import ButtonGroup from "../ButtonGroup.jsx";

export default function Links () {
    return (
        <form className="container links">
            <h3>Header Links</h3>

            <InputField type="url" name="LinkenIn"></InputField>
            <InputField type="url" name="GitHub"></InputField>
            <InputField type="url" name="Portfolio Website"></InputField>

            <ButtonGroup></ButtonGroup>
        </form>
    );
}