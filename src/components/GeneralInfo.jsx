import ButtonGroup from "./ButtonGroup";
import InputField from "./InputField";

export default function GeneralInfo({isFirst=false}) {
    return (
        <form className="container gen_info">
            <InputField type="text" name="Full Name"></InputField>
            <InputField type="text" name="Address"></InputField>
            <InputField type="email" name="Email"></InputField>
            <InputField type="tel" name="Phone"></InputField>

            <ButtonGroup isFirst={isFirst}></ButtonGroup>
        </form>
    );
}