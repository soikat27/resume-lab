export default function InputField({type, name}) {
    return (
        <div className="field">
            <label htmlFor={name}>{name}:</label>
            <input type={type} name={name} id={name}/>
        </div>
    );
}