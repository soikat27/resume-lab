import { useState } from "react";

export default function ButtonGroup({isFirst}) {
    const [saved, setSaved] = useState(false);

    const edit = <button type="button">Edit</button>;
    const submit = <button type="submit" onSubmit={() => {onSubmit(setSaved)}}>Submit & Next</button>
    const previous = <button type="button">Previous</button>;

    return (
        <div className="buttons">
            {saved && edit}
            {submit}
            {!isFirst && previous}
        </div>
        
    );
}

function onSubmit(setSaved) {
    setSaved(true);
}