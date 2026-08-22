import InputField from "./InputField";

export default function EducationItem({id, educationNo, institution, degree, location, startDate, endDate, canEdit, handleSetValue, handleDelete}) {
    return (
        <div className="education-item" id={id}>
            <div className="edu-chunk-header">
                <p className="edu-chunk-title">Add education {educationNo}</p>
                <button 
                    type="button" 
                    className="btn-delete" 
                    onClick={() => {handleDelete(id);}}
                >
                    –
                </button>
            </div>

            <div className="inputs">
                <InputField type="text" name="Institution Name" placeHolder="ex. Gettysburg College" value={institution} setValue={(text) => {handleSetValue(id, "institution", text)}} canEdit={canEdit} />
                <InputField type="text" name="Degree" placeHolder="ex. B.Sc. in Computer Science" value={degree} setValue={(text) => {handleSetValue(id, "degree", text)}} canEdit={canEdit} />
                <InputField type="text" name="Location" placeHolder="ex. Gettysburg, PA" value={location} setValue={(text) => {handleSetValue(id, "location", text)}} canEdit={canEdit} />
                <InputField type="month" name="Start Date" placeHolder="ex. Jan 2007 (MMM yyyy)" value={startDate} setValue={(text) => {handleSetValue(id, "startDate", text)}} canEdit={canEdit} />
                <InputField type="month" name="End Date (Actual or Expected)" placeHolder="ex. May 2011 (MMM yyyy)" value={endDate} setValue={(text) => {handleSetValue(id, "endDate", text)}} canEdit={canEdit} />
            </div>
        </div>
    );
}