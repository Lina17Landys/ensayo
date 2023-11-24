import styles from "./styles.css"

export enum AttributeChar {
  "name" = "name",
  "img" = "img",
}

class Character extends HTMLElement {
  name?: string;
  img?: string;

  static get observedAttributes() {
    const attrs: Record<AttributeChar, null> = {
      name: null,
      img: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: AttributeChar,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``

    const css = this.ownerDocument.createElement("style");
    css.innerHTML = styles;
    this.shadowRoot?.appendChild(css);

    this.shadowRoot!.innerHTML += `
<div class="chara-card">
    <img src="${this.img}">
    <p>${this.name}</p>
</div>

            `;
    }
  }
}

customElements.define("character-container", Character);
export default Character;
