import "../../../styles/inputField.css";

export default function InputField({type, name, placeHolder}) {
    function clearCustomValidity(event) {
        const input = event.target;
        input.setCustomValidity("");
        // input.reportValidity();
    }
    return (
        <div className="field">
            <label htmlFor={name}>{name}:</label>
            <input type={type} name={name} id={name} placeholder={placeHolder} onInput={clearCustomValidity}/>
        </div>
    );
}