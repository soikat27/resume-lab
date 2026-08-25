import InputField from "./InputField";

export default function ExperienceItem({id, experienceNo, position, company, location, duties, startDate, endDate, canEdit, handleSetInputValue, handleSetTextAreaValue, handleDeleteExperience, handleAddDuty, handleDeleteDuty}) {
    return (
        <div className="experience-item" id={id}>
            <div className="exp-chunk-header">
                <p className="exp-chunk-title">Add Experience {experienceNo}</p>
                <button type="button" className="btn-delete" disabled={!canEdit} onClick={() => {handleDeleteExperience(id);}}>–</button>
            </div>

            <div className="inputs">
                <InputField type="text" name="Position Title" placeHolder="ex. Junior Software Developer" value={position} setValue={(text) => {handleSetInputValue(id, "position", text)}} canEdit={canEdit} />
                <InputField type="text" name="Company Name" placeHolder="ex. SpaceX" value={company} setValue={(text) => {handleSetInputValue(id, "company", text)}} canEdit={canEdit} />
                <InputField type="text" name="Location" placeHolder="ex. Boston, MA" value={location} setValue={(text) => {handleSetInputValue(id, "location", text)}} canEdit={canEdit} />

                <div className="duties">
                    <p>Add Job responsibilities</p>
                    <button type="button" className="btn-add" disabled={!canEdit} onClick={() => {handleAddDuty(id);}}>+</button>
                    {
                        duties.map((duty, index) => {
                            return (
                                <div key={duty.id} className="duty-item" id={duty.id}>
                                    {
                                        (index !== 0 && <button type="button" className="btn-delete" disabled={!canEdit} onClick={() => {handleDeleteDuty(id, duty.id)}}>–</button>)
                                    }
                                    <InputField type="textarea" name={"Duty " + (index+1)} placeHolder="ex. Programmed a prototype that simulates humans living on the planet Jupiter." value={duty.string} setValue={(text) => {handleSetTextAreaValue(id, duty.id, text)}} canEdit={canEdit} />
                                </div>  
                            );
                        }) 
                    }
                </div>
                
                <InputField type="month" name="Start Date" placeHolder="ex. Jan 2007 (MMM yyyy)" value={startDate} setValue={(text) => {handleSetInputValue(id, "startDate", text)}} canEdit={canEdit} />
                <InputField type="month" name="End Date (Actual or Expected)" placeHolder="ex. May 2011 (MMM yyyy)" value={endDate} setValue={(text) => {handleSetInputValue(id, "endDate", text)}} canEdit={canEdit} />
            </div>
        </div>
    );
}