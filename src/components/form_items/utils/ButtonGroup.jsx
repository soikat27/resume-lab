export default function ButtonGroup({hasPrev, hasEdit, hasNext, handlePrev, setCanEdit}) { 
    function handleEdit() {
        setCanEdit(true);
    }
    
    return (
        <div className="buttons">
            <div className="left">
                {hasPrev && 
                    <button 
                        className="btn-prev" 
                        type="button" 
                        onClick={handlePrev}
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
                        onClick={handleEdit}
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