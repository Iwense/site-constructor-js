import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from "./blocks"

export class Sidebar {
    constructor(selector, update){
        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }

    init(){
        this.$el.innerHTML = this.template
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$hide = document.querySelector('.hideBtn')
        this.$hide.addEventListener('click', () => {this.hide()})
    }

    get template (){
        return [
            btnHide(),
            block('title', 'Добавить заголовок'),
            block('text', 'Добавить текст'),
            block('image','Добавить изображение'),
            block('textColumns','Добавить текстовые колонки'),
        ].join('')
    }

    hide(){
        this.$el.style.display = 'none'
        document.querySelector('.showBtn').style.display = 'block'
    }

    addBlock(event){
        event.preventDefault()

        const type = event.target.name
        let value = event.target.value.value
        const styles = event.target.styles.value
        const elemStyles = event.target.elemStyles.value

        const Constructor = 
        type === 'title' ? TitleBlock :
        type === 'text' ? TextBlock :
        type === 'image' ? ImageBlock : 
        type === 'textColumns' ? TextColumnsBlock : null

        if (type === 'textColumns'){
            value = value.split('|')
        }
        
        console.log(elemStyles)
        const newBlock = new Constructor (value, {styles, elemStyles})
        event.target.value.value = ''
        event.target.styles.value = ''
        event.target.elemStyles.value = ''

        this.update(newBlock)
        
    }
}

function block (type, name){
    return `<form name="${type}">
            <h2>${name}</h2>
            <div class="form-group">
                <input type="text" class="form-control" ${type === 'textColumns' ? `placeholder="Добавляйте значения через |"` : `placeholder="Значение"`} name="value">
            </div>
            
            <div class="form-group">
                <input type="text" class="form-control" name="styles" placeholder="Стили блока">
            </div>

            <div class="form-group">
                <input type="text" class="form-control" name="elemStyles" placeholder="Стили элемента">
            </div>

            <button type="submit" class="btn">Добавить</button>
            </form>
            <hr />
    `
}

function btnHide(){
    return `<span class="hideBtn">v</span>`
}

