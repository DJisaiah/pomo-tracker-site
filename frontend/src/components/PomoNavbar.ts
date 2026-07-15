export class PomoNavbar extends HTMLElement {
  constructor() {
    super();
  }
  // need to look into if, an object of this class is made first, so i can maniuplate instance variables for setting style to things like ol
  connectedCallback() {
    const navbar = document.createElement("nav");
    const pageListing = document.createElement("ol");
    const options = {
      Home: "link",
      "Try Pomo-Tracker!": "link",
      "Submit an Issue": "link",
      About: "link",
    };
    for (const [pageTitle, pageLink] of Object.entries(options)) {
      const page = document.createElement("li");
      pageListing.appendChild(page);
      const link = document.createElement("a");
      link.href = pageLink;
      link.textContent = pageTitle;
      page.appendChild(link);
    }
    navbar.appendChild(pageListing);
    this.appendChild(navbar);
  }

  setStyle() {}
}

customElements.define("pomo-navbar", PomoNavbar);
