import ButtonGroup from "./ButtonGroup";
import InputField from "./InputField";
import { useState } from "react";

export default function GeneralInfo({isFirst=false}) {
    const initInfo = {
        "Full Name": "",
        Address: "",
        Email: "",
        Phone: ""
    };
    const [genInfo, setGenInfo] = useState(initInfo);
    const [saved, setSaved] = useState(false);

    return (
        <form className="container gen_info">
            <InputField type="text" name="Full Name" value={genInfo["Full Name"]} saveInfo={setGenInfo}></InputField>
            <InputField type="text" name="Address" value={genInfo.Address} saveInfo={setGenInfo}></InputField>
            <InputField type="email" name="Email" value={genInfo.Email} saveInfo={setGenInfo}></InputField>
            <InputField type="tel" name="Phone" value={genInfo.Phone} saveInfo={setGenInfo}></InputField>

            <ButtonGroup isFirst={isFirst}></ButtonGroup>
        </form>
    );
}