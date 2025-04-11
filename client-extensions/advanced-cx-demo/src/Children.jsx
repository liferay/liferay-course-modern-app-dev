import React from 'react'

/**
 * This is a simple component which demonstrates how to 
 * use slots to receive child elements from the outer content.
 */
export default function Children() {
  return (
    <div className="wrapper">
      <h2>These children are rendered by React</h2>
      {/* Define the slot name that we'll populate */}
      <slot name="kids"></slot>
    </div>
  )
}

