export default function InputField({type, name, value, saveInfo}) {
    return (
        <div className="field">
            <label htmlFor={name}>{name}:</label>
            <input type={type} name={name} id={name} value={value} onChange={(event) => {onChangeHandler(event, saveInfo, name)}}/>
        </div>
    );
}

function onChangeHandler(event, saveInfo, name) {
    // 1. communicate info to parent (section) – acts as the only source of truth
    const newValue = event.target.value;
    saveInfo((previous) => ({...previous, [name]: newValue}));
}