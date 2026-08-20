import InputField from "./utils/InputField.jsx";
import ButtonGroup from "./utils/ButtonGroup.jsx";

export default function Links (props) {
    return (
        <form className="container links">
            <h3>Header Links</h3>

            <InputField type="url" name="LinkenIn" placeHolder="ex. www.linkedin.com/in/user_name"/>
            <InputField type="url" name="GitHub" placeHolder="ex. www.github.com/user_name"/>

            <ButtonGroup {...props}/>
        </form>
    );
}