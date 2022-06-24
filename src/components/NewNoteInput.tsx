import React, { ChangeEvent } from "react";

import newNoteInputProps from "../interface/newNoteInput";

const NewNoteInput: React.FC<newNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = React.useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    }

    return(
        <div>
            <input 
                onChange={updateNote}
                value={note}
                type="text"
                name="note"
                placeholder="Note" />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}

export default NewNoteInput;