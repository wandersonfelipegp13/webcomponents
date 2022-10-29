class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card-left')

        const autor = document.createElement('span')
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous')

        const linkTitle = document.createElement('a')
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute('link-url') || '#'

        const newsContent = document.createElement('p')
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const cardRight = document.createElement('div')
        cardRight.setAttribute('class', 'card-right')

        const newsImage = document.createElement('img')
        newsImage.src = this.getAttribute('image-source') || 'https://source.unsplash.com/random/?newspaper'
        newsImage.alt = this.getAttribute('image-alt')
        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
                margin: 2em auto;
                max-width: 720px;
                box-shadow: 6px 11px 32px -9px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 6px 11px 32px -9px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 6px 11px 32px -9px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
    
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card-left>span {
                font-weight: 400;
            }
            
            .card-left>a {
                margin-top: 15px;
                font-size: 25px;
                font-weight: 500;
                color: black;
                text-decoration: none;
            }
            
            .card-left>p {
                color: rgb(70, 70, 70);
            }
            
            .card-right {
                width: 150px;
                height: 150px;
            }
            
            .card-right>img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        `
        return style
    }

}

customElements.define('card-news', CardNews)