import "../../../styles/inputField.css";

/**
 * Labeled text, email, tel, month, or textarea field used across form steps.
 */
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
            {type === "textarea" && <textarea name={name} id={name} value={value} placeholder={placeHolder} onChange={handleSetValue} readOnly={!canEdit} />}
            {type !== "textarea" && 
                <input 
                    type={type} 
                    name={name} 
                    id={name}
                    value={value}
                    placeholder={placeHolder} 
                    onChange={handleSetValue}
                    readOnly={!canEdit}
                />
            }
        </div>
    );
}