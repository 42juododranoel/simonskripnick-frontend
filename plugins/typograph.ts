import Typographer from "typograf"
import { hyphenateSync } from "hyphen/en"

const typographer = new Typographer({ locale: ["ru", "en-US"] })
typographer.disableRule("*")
typographer.enableRule("common/nbsp/afterNumber")
typographer.enableRule("common/nbsp/afterParagraphMark")
typographer.enableRule("common/nbsp/afterSectionMark")
typographer.enableRule("common/nbsp/afterShortWord")
typographer.enableRule("common/nbsp/beforeShortLastNumber")
typographer.enableRule("common/nbsp/beforeShortLastWord")
typographer.enableRule("common/nbsp/dpi")
typographer.enableRule("common/nbsp/nowrap")

typographer.setSetting("common/nbsp/afterShortWord", "lengthShortWord", 3)

function typographChildren(vnode) {
  if (typeof vnode.children == "string") {
    let text = vnode.children
    text = typographer.execute(text)
    text = hyphenateSync(text)
    vnode.children = text
  } else {
    if (vnode.children && vnode.children.forEach !== undefined) {
      vnode.children.forEach((child) => {
        typographChildren(child)
      })
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("typograph-content", {
    created: (element, binding, vnode, prevVNode) => {
      // typographChildren(vnode)
    },
  })
})
