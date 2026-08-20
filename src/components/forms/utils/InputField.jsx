export default function InputField({type, name, placeHolder}) {
    return (
        <div className="field">
            <label htmlFor={name}>{name}:</label>
            <input type={type} name={name} id={name} placeholder={placeHolder} />
        </div>
    );
}