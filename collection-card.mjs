
class CollectionCard extends HTMLElement{
    static style=`
    .CollectionCard{
        font-family: "Noto Sans TC", sans-serif;

    }
    .CollectionImgBox{
        border-radius:8px;
        overflow:hidden;
    }
    .CollectionImg{
        display:block;
        
    }
    .CollectionTitle{
        margin:1rem 0 0 0;
        font-size:28px;
        font-weight:700;
        line-height:1.2
        text-align: left;
    }
    .CollectionSubTitle{
        margin:0.5rem 0 1.5rem 0;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color:#919191
    }
    `
    constructor(){
        super()
        this.attachShadow({mode:"open"});
        this.styling();
        this.render();
    }
    styling(){
        this.stylesheet=document.createElement('style')
        this.shadowRoot.appendChild(this.stylesheet);
        this.stylesheet.textContent=this.constructor.style;
    }
    render(){
        this.CollectionCard=document.createElement('div')
        this.shadowRoot.appendChild(this.CollectionCard)
        this.CollectionCard.className='CollectionCard'
        
        this.CollectionImgBox=document.createElement('div')
        this.CollectionCard.appendChild(this.CollectionImgBox)
        this.CollectionImgBox.className='CollectionImgBox'
        this.CollectionImgBox.src=this.getAttribute('picSrc')

        this.CollectionImg=document.createElement('img')
        this.CollectionImgBox.appendChild(this.CollectionImg)
        this.CollectionImg.className='CollectionImg'
        this.CollectionImg.src=this.getAttribute('picSrc')

        this.CollectionTitle=document.createElement('h3')
        this.CollectionCard.appendChild(this.CollectionTitle)
        this.CollectionTitle.className='CollectionTitle'
        this.CollectionTitle.textContent=this.getAttribute('CollectionTitle')

        this.CollectionSubTitle=document.createElement('h4')
        this.CollectionCard.appendChild(this.CollectionSubTitle)
        this.CollectionSubTitle.className='CollectionSubTitle'
        this.CollectionSubTitle.textContent=this.getAttribute('CollectionSubTitle')
    }

}
window.customElements.define('collection-card',CollectionCard)
