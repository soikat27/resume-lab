import "../../../styles/inputField.css";

export default function InputField({type, name, placeHolder, value, setValue, canEdit}) {
    function handleSetValue(event) {
        // 1. reset custom validity
        const input = event.target;
        input.setCustomValidity("");

        // 2. update state
        setValue(input.value);
    }
    
    return (
        <div className="field">
            <label htmlFor={name}>{name}:</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                value={value}
                placeholder={placeHolder} 
                onChange={handleSetValue}
                readOnly={!canEdit}
            />
        </div>
    );
}