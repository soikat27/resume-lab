import InputField from "./utils/InputField";
import ButtonGroup from "./utils/ButtonGroup";

export default function Experience(props) {
    return (
        <form className="container experience">
            <h3>Revelant Experience</h3>

            <InputField type="text" name="Company Name" />
            <InputField type="text" name="Position Title" />
            <InputField type="text" name="Job Responsibility" />
            <InputField type="date" name="Start Date" />
            <InputField type="date" name="End Date" />

            <ButtonGroup {...props}/>
        </form>
    );
}