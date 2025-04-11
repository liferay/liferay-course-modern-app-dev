import React from 'react'
import ReactDOM from 'react-dom/client'
import Props from './Props'
import Children from './Children'

/*
 * Demonstrate how to use props from the custom fragment here in the element
 */
class PropsExample extends HTMLElement {
  constructor() {
    super()
    this._root = null
    this._shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow)

    // use this.getAttribute() to get the values that will be
    // passed to use as props on the custom element.
    this._root.render(
      <React.StrictMode>
        <Props entryId={this.getAttribute('id')} 
          backgroundColor={this.getAttribute('background-color')} 
          label={this.getAttribute('label')} />
      </React.StrictMode>
    )
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }
}

/*
 * Demonstrate how to use children from the custom fragment here in the element
 * Also demonstrates how to use slots from the custom fragment here in the element
 */
class ChildExample extends HTMLElement {
  constructor() {
    super()
    this._root = null
    this._shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this._root = ReactDOM.createRoot(this._shadow)
    this._root.render(
      <React.StrictMode>
        <Children />
      </React.StrictMode>
    )
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }
}

const PROPS_EXAMPLE = 'props-example';
const CHILD_EXAMPLE = 'child-example';

if (customElements.get(PROPS_EXAMPLE)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${PROPS_EXAMPLE}> (already registered)`);
} else {
  customElements.define(PROPS_EXAMPLE, PropsExample);
}

if (customElements.get(CHILD_EXAMPLE)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${CHILD_EXAMPLE}> (already registered)`);
} else {
  customElements.define(CHILD_EXAMPLE, ChildExample);
}
