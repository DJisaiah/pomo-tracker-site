export class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const heading = document.createElement("h1");
    this.appendChild(heading);
  }
}
