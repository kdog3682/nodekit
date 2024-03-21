import * as csx from "/home/kdog3682/2024-javascript/csx/main.js"

export default hydrateTxflowShorthandCss 

function hydrateTxflowShorthandCss(s) {
    const replacer = (_, spaces, match) => {
        let s = 'css:\n'
        const value = csx.converter(s)
        console.log(value); throw "value"
        console.log(value)
        
    }

    return s.replace(/^( *)(?:css|c): *(.+)/gm, replacer)
}
