import React, { useState, useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'


const TextEditor = () => {
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable placeholder="Enter some plain text..." />
        </Slate>
    )
}

const initialValue = [
    {
        children: [
            { text: 'Enter some plain text Whoot...' },
        ],
    },
]

export default TextEditor