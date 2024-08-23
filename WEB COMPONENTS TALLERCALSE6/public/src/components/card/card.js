class Card extends HTMLElement {

    static get observedAttributes() {
        return ['img', 'alt', 'title', 'description', 'button'];
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[propName] = newValue;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section class="product-card__totalinfo">
        <div class="product-card">
        <div class="product-card__text">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <button>${this.button}</button
        </div>
        </div>
        <div class="product-card__img">
        <img src="${this.img}" alt="${this.alt}">
        </div>
        </section>
        `;
        
    }
}

customElements.define('product-card', Card);
export default Card;