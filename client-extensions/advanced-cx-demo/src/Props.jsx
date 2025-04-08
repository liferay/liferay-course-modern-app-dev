import React from 'react';

import './Props.css'

/**
 * This is a simple component to render the text we're given as properties.
 * It does have defaults for the properties, so it's not required to pass them.
 */
function Props({ entryId = '-1', backgroundColor = 'white', label = 'Hello, World!' }) {
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
