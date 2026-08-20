export default function ButtonGroup({isFirst, isLast, prevForm}) {
    const next = <button className="btn-next" type="submit">Save & Next</button>;
    const prev = <button className="btn-prev" type="button" onClick={prevForm}>previous</button>;
    
    return (
        <div className="buttons">
            {!isFirst && prev}
            {!isLast && next}
        </div>  
    );
}