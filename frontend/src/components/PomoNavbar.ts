export class PomoNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    const navbar = document.createElement("nav");
    const pageListing = document.createElement("ol");
    const options = {
      Home: "link",
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
    this.setStyle();
    this.shadowRoot!.appendChild(navbar);
  }

  setStyle() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
        nav {
            border-bottom: 2px solid #616161;
            box-shadow: 1px 1px 1px #212121;
        }
        ol {
            list-style: none;
            display: flex;
            justify-content: center;
        }
        ol li a {
            display: inline-block;
            padding: 2px 25px;
            text-decoration: none;
            color: #616161;
            font-family: sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
        }
        ol:hover li a {
            transform: scale(0.9);
        }
        ol:hover li a:hover {
            /*text-decoration: #388e3c wavy underline; */
            transform: scale(1.5);
            font-weight: 700;
            color: #a5d6a7;
        }
    `);
    this.shadowRoot!.adoptedStyleSheets = [sheet];
  }
}

customElements.define("pomo-navbar", PomoNavbar);
