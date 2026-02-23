import React from 'react'

const SnippetBlock = ({ snippet, title, idForRetrieval }) => {

    const copyCode = btn => {
        const pre = btn.closest('.codeBlock').querySelector('pre');
        const text = pre.innerText;
        navigator.clipboard.writeText(text);
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 2000);
    }


    return (
        <div className={"codeBlock"} id={idForRetrieval}>
            <div className={"code-header"}>
                <span>{title}</span>
                <button className={"copy-btn"} onClick={e => { copyCode(e.target) }}>Copy</button>
            </div>
            <div>
                <pre>
                    {
                        snippet.split(`\n`).map((l, idx) => {
                            return (
                                <div key={idx}>
                                    {l}<br></br>
                                </div>
                            )

                        })
                    }
                </pre>
            </div>
        </div>
    )
}

export default SnippetBlock;