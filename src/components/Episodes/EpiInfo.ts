import styles from "./styles.css"

export enum Attribute {
    "name" = "name",
    "ep" = "ep",
}

class EpiInfo extends HTMLElement {

    name?: string;
    ep?: string;

    static get observedAttributes (){
        const attrs: Record <Attribute, null> = {
            name: null,
            ep: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
   
    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

            this.shadowRoot!.innerHTML += `
    
            <div class="episode-card">
            <p>${this.name}</p>
            <p>${this.ep}</p>
            </div>
            `
        }
        
    }
}

customElements.define("episode-container", EpiInfo);
export default EpiInfo;