class CollectionTag extends HTMLElement{
    static style=`
    .CollectionTag{
        max-width:fit-content;
        background-color:#F1F1F1;
        padding:4px 12px 4px 12px;    
        border-radius:16px

    }
    `
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.styling();
        this.render();
    }
    render(){
        this.CollectionTag=document.createElement('div')
        this.CollectionTag.textContent=this.getAttribute('tagText');
        this.CollectionTag.className='CollectionTag'
        this.shadowRoot.appendChild(this.CollectionTag);

    }
    styling(){
        this.stylesheet=document.createElement('style');
        this.shadowRoot.appendChild(this.stylesheet);
        this.stylesheet.textContent=this.constructor.style
    }
}
window.customElements.define('collection-tag',CollectionTag);