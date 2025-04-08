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
    // Mount the app with React.StrictMode wrapper
    this._root = ReactDOM.createRoot(this._shadow)
    this._root.render(
      <React.StrictMode>
        <Props entryId={this.id} backgroundColor={this.backgroundColor} label={this.label} />
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
    this._shadow = this.attachShadow({ mode: 'open' })

    // Prepare React mount point
    this._mountRoot = document.createElement('div')
    this._shadow.appendChild(this._mountRoot)

    // Inject <slot> wrapper for light DOM children
    const slotContainer = document.createElement('div')
    slotContainer.innerHTML = `<slot></slot>`
    this._shadow.appendChild(slotContainer)

    this._reactRoot = null
  }

  connectedCallback() {
    if (!this._reactRoot) {
      this._reactRoot = ReactDOM.createRoot(this._mountRoot)
      this._reactRoot.render(
        <React.StrictMode>
          <Children />
        </React.StrictMode>
      )
    }
  }

  disconnectedCallback() {
    if (this._reactRoot) {
      this._reactRoot.unmount()
      this._reactRoot = null
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
