import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


function AboutCode() {
    const [value, setValue] = React.useState(`import coffee
while CoffeePot.level() > 0:
    CoffeeCup.drink()
    if CoffeeCup.empty():
        Coffee.fill(CoffeePot)
    Work.GetSomeShitDone()`);
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    return <CodeMirror
        value={value}
        height="100%"
        width="100%"
        extensions={[javascript({ jsx: true })]} onChange={onChange}
        editable={false}
        theme={okaidia}
    />;
}
export default AboutCode;