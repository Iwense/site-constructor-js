import { TextBlock, TitleBlock } from "./blocks"

export class Sidebar {
    constructor(selector, update){
        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }

    init(){
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    get template (){
        return [
            block('title'),
            block('text'),
        ].join('')
    }

    

    addBlock(event){
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const Constructor = type === 'text' ? TextBlock : TitleBlock

        const newBlock = new Constructor (value, {styles})
        event.target.value.value = ''
        event.target.styles.value = ''

        this.update(newBlock)
        
    }
}

function block (type){
    return `<form name="${type}">
            <h2>${type}</h2>
            <div class="form-group">
                <input type="text" class="form-control" name="value" placeholder="value">
            </div>
            
            <div class="form-group">
                <input type="text" class="form-control" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
            </form>
            <hr />
    `
}