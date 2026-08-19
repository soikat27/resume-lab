export default function ButtonGroup({isFirst, isLast, onChangeHandler, lastIndex}) {
    const next = <button type="submit" onClick={() => {onNextHandler(onChangeHandler, lastIndex)}}>Save & Next</button>;
    const prev = <button type="submit" onClick={() => {onPrevHandler(onChangeHandler)}}>previous</button>;
    
    return (
        <div className="buttons">
            {!isFirst && prev}
            {!isLast && next}
        </div>  
    );
}

function onNextHandler(onChangeHandler, lastIndex) {
    onChangeHandler((previous) => Math.min(previous+1, lastIndex))
}

function onPrevHandler(onChangeHandler) {
    onChangeHandler((previous) => Math.max(previous-1, 0))
}