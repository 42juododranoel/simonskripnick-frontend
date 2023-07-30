import Typographer from 'typograf'

const typographer = new Typographer({ locale: ["ru", 'en-US'] })

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('typograph-content', {
        inserted: (element, binding, vnode) => {
            vnode.children.forEach((chidlVnode) => {
              if (chidlVnode.elm.nodeName === '#text') {
                chidlVnode.elm.nodeValue = typographer.execute(chidlVnode.elm.nodeValue)
              }
            })
        },        
    })
})
