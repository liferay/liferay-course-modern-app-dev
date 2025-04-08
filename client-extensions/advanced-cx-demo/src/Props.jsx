import React, { useEffect } from 'react';

import './Props.css'

function Props({ entryId = '-1', backgroundColor = 'white', label = 'Hello, World!' }) {

    useEffect(() => {
        console.log(Number(entryId));
    }, [entryId]);

    console.log('Props component rendered with:', entryId, label, backgroundColor);
    return (
    <>
    <div id={entryId} className="card" style={{ backgroundColor }}>
      <h2>This is rendered by React</h2>
      <h1>{entryId}: {label}</h1>
    </div>
    </>
  )
}

export default Props
