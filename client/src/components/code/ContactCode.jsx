import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

function ContactCode() {
    const [value, setValue] = React.useState(`const button = document.querySelector('#sendBtn');
    const message = {
    name: "Jonathan Davis",
    email: "",
    message: "",
    date: "Thu 21 Apr"
    }

    button.addEventListener('click', () => {
	    form.send(message);
})`);
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return <CodeMirror value={value} height="100%" extensions={[javascript({ jsx: true })]} onChange={onChange}
        editable={false}
        theme={okaidia}
    />;
}
export default ContactCode;
