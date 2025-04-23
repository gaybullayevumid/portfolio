import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// import { github } from '@uiw/codemirror-theme-github'
import { okaidia } from '@uiw/codemirror-theme-okaidia';

function Code() {
    const [value, setValue] = React.useState(`/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`);
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return (
        <CodeMirror
            value={value}
            theme={okaidia}
            height="100%"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            editable={false} />
    );
}
export default Code;
