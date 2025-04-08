import React from 'react'

export default function Children() {
  return (
    <div className="wrapper">
      <h2>These children are rendered by React</h2>
      <slot></slot>
    </div>
  )
}

