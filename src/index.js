import './css/style.css'
import {model} from './model'

const site = document.querySelector('#site')

//new Sidebar ('#panel', updateBlock)

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML())
})
