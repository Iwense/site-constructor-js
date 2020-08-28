class Sidebar {
    constructor(selector, update){
        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }


    init(){

        this.$el.innerHTML = this.template
        this.$el.addEventListener('submit', this.addBlock) 

    }

    get template (){
        return [
            block('title'),
            block('text'),
        ].join('')
    }

    

    addBlock(event){
        event.preventDefault()


        
    }
}

function block (type){
    return `<form name="${type}>
            <h2>${type}</h2>
            <div class="form-group">
                <input type="text" class="form-control" value="value" placeholder="value">
            </div>
            
            <div class="form-group">
                <input type="text" class="form-control" value="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
            </form>
    `
}