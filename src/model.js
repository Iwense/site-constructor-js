import {css} from './utils'
import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/blocks'



export const model = [
    new TitleBlock ('Hello world', {
        tag: 'h2',
        styles: css({
            background: '#efffff',
            color:'#fff',
            'text-align' : 'center',
        })
    }),
    new TextBlock ('Hello world its a paragraph', {
        styles: css({
            color: 'red',
        })
    }),
    new TextColumnsBlock([
        'Привет меня зовут Александр',
        'Я на данный момент живу в Москве',
        'Я полностью заново сделал весь этот проект'
    ], {
        styles: css({
            color:'#ffe',
        })
    }),
]


