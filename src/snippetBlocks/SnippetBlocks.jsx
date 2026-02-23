import React from 'react';
import SnippetBlock from '../snippetBlock/SnippetBlock';

export default function SnippetBlocks({blocks}) {
  return (
      <div id={"codeBlocks"}>
        {
            blocks.map((b,idx) => {
                return <SnippetBlock key={idx} snippet={b.snippet} title={b.title} idForRetrieval={`cblk_${(b.title.replaceAll(" ", "_")).toLowerCase()}`}/>
            })
        }
      </div>
  )
}
