import {col, row} from '../utils'

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
    constructor(value,options = {}){
        super(value,options)
    }

    toHTML(){
        const {styles ,elemStyles = '',tag = 'h1'} = this.options
        return row(`<${tag} style="${elemStyles}">${this.value}</${tag}>`,styles)
    }
}


export class TextBlock extends Block {
    constructor(value,options = {}){
        super(value,options)
    }

    toHTML(){
        const {styles, elemStyles = ''} = this.options
        return row(`<p style="${elemStyles}">${this.value}</p>`,styles)
    }
}


export class TextColumnsBlock extends Block {
    constructor(value,options){
        super(value,options)
    }

    toHTML(){
        const {styles, elemStyles = ''} = this.options
        const html = this.value.map(item => col(item,elemStyles)).join('')
        return row(html,styles)
    }
}


export class ImageBlock extends Block {
    constructor(value,options){
        super(value,options)
    }

    toHTML(){
        const {styles, elemStyles= '', alt} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${elemStyles}" />`, styles)
    }
}