export default function ButtonGroup({hasPrev, hasEdit, hasNext, prevHandler, editHandler}) { 
    function enableEdit() {
        if (hasEdit === true) // if editButton -> form is saved
            editHandler(false);
    }
    
    return (
        <div className="buttons">
            <div className="left">
                {hasPrev && 
                    <button 
                        className="btn-prev" 
                        type="button" 
                        onClick={prevHandler}
                    >
                        previous
                    </button>
                }
            </div>
            <div className="right">
                {hasEdit && 
                    <button 
                        className="btn-edit" 
                        type="button" 
                        onClick={enableEdit}
                    >
                        Edit
                    </button>
                }
                {(hasNext) ? ( 
                    <button 
                        className="btn-next" 
                        type="submit"
                    >
                        Save & Next
                    </button>
                    ) : (
                        <button 
                            className="btn-download" 
                            type="button" 
                        >
                            Download
                        </button>
                    )
                }
            </div>
        </div>  
    );
}