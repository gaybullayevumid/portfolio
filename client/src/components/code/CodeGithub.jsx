import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
// import { github } from '@uiw/codemirror-theme-github'
import { okaidia } from '@uiw/codemirror-theme-okaidia';

function CodeGithub() {
    const [value, setValue] = React.useState(`const githubLink = 
“https://github.com/gaybullayevumid”`);
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return (
        <CodeMirror
            value={value}
            theme={okaidia}
            width="100%"
            height="100%"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            editable={false}
        />
    );
}
export default CodeGithub;
