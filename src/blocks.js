import {col, row} from './utils'

class Block {
    constructor(value, options){
        this.value = value
        this.options = options
    }

    toHTML(){
        throw new Error ('Need create toHTML!')
    }
}

export class TitleBlock extends Block {
    constructor(value,options){
        super(value,options)
    }

    toHTML(){
        const {styles,tag} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}


export class TextBlock extends Block {
    constructor(value,options = {}){
        super(value,options)
    }

    toHTML(){
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), styles)
    }
}


export class TextColumnsBlock extends Block {
    constructor(value,options){
        super(value,options)
    }

    toHTML(){
        const styles = this.options.styles
        const html = this.value.map(item => col(item))
        return row(html, styles)
    }
}


export class ImageBlock extends Block {
    constructor(value,options){
        super(value,options)
    }

    toHTML(){
        const {styles,alt, imageStyles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${imageStyles}"`, styles)
    }
}