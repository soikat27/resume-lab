export default function ButtonGroup({isFirst, saved}) {
    const edit = <button type="button">Edit</button>;
    const submit = <button type="submit" onSubmit={(event) => {submitHandler(event, setSaved)}}>Submit & Next</button>
    const previous = <button type="button">Previous</button>;

    return (
        <div className="buttons">
            {saved && edit}
            {submit}
            {!isFirst && previous}
        </div>
        
    );
}

function submitHandler(event, setSaved) {
    // 0. prevent default
    event.preventDefault();
    // 1. save info in state


    // 2. set saved to true
    setSaved(true);
}