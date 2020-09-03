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
        site.insertAdjacentHTML('beforeend', btnShow())
        this.$show = document.querySelector('.showBtn')
        this.$show.addEventListener('click', () => {this.show()})
    }

    show(){
        this.$show.style.display = 'none'
        document.querySelector('#panel').style.display = 'flex'
    }
}


function btnShow(){
    return `<span class="showBtn">^</span>`
}