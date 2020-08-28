export class Site {
    constructor(selector, update){
        this.$el = document.querySelector(selector)
        this.update = update

    }


    render(model){
        site.innerHTML = ''
        model.forEach(block => {
            site.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}
