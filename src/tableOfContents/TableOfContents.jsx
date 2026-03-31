import React from 'react'

export default function TableOfContents({ blocks }) {
    return (
        <div id={"tableOfContents"}>
            <div>
                <h3 style={{textAlign: "center"}}>Docx Editor</h3>
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
                <h3 style={{textAlign: "center"}}>Spreadsheet Editor</h3>
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
                <h3 style={{textAlign: "center"}}>PDF</h3>
                {
                    blocks.filter(b => b.type === "pdf").map((blk, idx) => {
                        return (
                            <div className={"entry"} key={idx}>
                                <a href={`#cblk_${((blk.title).replaceAll(" ", "_")).toLowerCase()}`}>{blk.title}</a><br></br>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h3 style={{textAlign: "center"}}>UI</h3>
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
                <h3 style={{textAlign: "center"}}>Event Listeners</h3>
                {
                    blocks.filter(b => b.type === "eventListeners").map((blk, idx) => {
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
