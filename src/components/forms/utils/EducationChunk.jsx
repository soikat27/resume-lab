import InputField from "./InputField";

export default function EducationChunk({id, count, deleteEducation}) {
    return (
        <div className="edu-chunk" id={id}>
            <div className="edu-chunk-header">
                <p className="edu-chunk-title">Education {count}</p>
                <button type="button" className="btn-delete" onClick={() => {deleteEducation(id)}}>
                    –
                </button>
            </div>

            <div className="inputs">
                <InputField type="text" name="Institution Name" />
                <InputField type="text" name="Degree" />
                <InputField type="text" name="Location" />
                <InputField type="month" name="Start Date" />
                <InputField type="month" name="End Date" />
            </div>  
        </div>
    );
}