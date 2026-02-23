import React from 'react'

export default function TableOfContents({ blocks }) {
    return (
        <div id={"tableOfContents"}>
            <div>
                <h3>Docx Editor</h3>
                {
                    blocks.filter(b => b.type === "docx").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h3>Spreadsheet Editor</h3>
                {
                    blocks.filter(b => b.type === "spreadsheet").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h3>Annotation</h3>
                {
                    blocks.filter(b => b.type === "annotations").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h3>UI</h3>
                {
                    blocks.filter(b => b.type === "ui").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h3>Form Flatten</h3>
                {
                    blocks.filter(b => b.type === "flattenForm").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
