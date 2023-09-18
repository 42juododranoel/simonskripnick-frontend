<template>
  <div class="editor">
    <div class="editor--header">
      <div class="row">
        <div class="col-8-md">
          <ContentHeading1 v-typograph-content>Textflowrhyme Editor</ContentHeading1>
        </div>
      </div>   
      <div class="row">
        <div class="col-10-md editor--description">
          <ContentParagraph v-typograph-content>
            What makes a good tempo? Mainly two things: don’t make your sentences too lengthy and don’t repeat same-length sentences too many times. This application highlights the length of your sentences and predicts the expected fatigue of your reader — and the more you type, the better it understands your writing style. Note on data protection: I don’t have means to read what you paste here, and it is not saved anywhere.
          </ContentParagraph>
        </div>
      </div>
    </div>
    <div class="editor--body">
      <div class="row">
        <!-- <div class="editor--buttons">
          <button class="editor--button" @click="say">Example</button>
        </div> -->
        <div class="col-10-md">
          <editor-content class="editor--textarea" :editor="editor" />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3"
import Paragraph from "@tiptap/extension-paragraph"
import Document from "@tiptap/extension-document"
import Text from "@tiptap/extension-text"
import History from '@tiptap/extension-history'
import { mergeAttributes, Mark } from "@tiptap/core"

const FatigueMark = Mark.create({
  name: "fatigue",
  renderHTML({ HTMLAttributes }) {
    return ["span", {class: `editor--fatigue__value${HTMLAttributes.value}`}, 0]
  },
  addAttributes() {
    return {
      value: {
        default: 0,
      },
    }
  },
})

const LengthMark = Mark.create({
  name: "length",
  renderHTML({ HTMLAttributes }) {
    return ["span", {class: `editor--sentence__length${HTMLAttributes.value}`}, 0]
  },
  addAttributes() {
    return {
      value: {
        default: 0,
      },
    }
  },
})

const EditorDocument = Document.extend({
  content: "paragraph+",
})

const EditorText = Text.extend({
  marks: "fatigue length",

})

const EditorParagraph = Paragraph.extend({
  content: "text*",
  renderHTML({ HTMLAttributes }) {
    return ["p", mergeAttributes(HTMLAttributes, { class: "editor--paragraph" }), 0]
  },
})

const initialContent = {
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.",
          "marks": []
        }
      ],
    },
    {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "“Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”",
            "marks": []
          }
        ],
    },  
    {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgements is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.",
            "marks": []
          }
        ],
    },  
    {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "And, after boasting this way of my tolerance, I come to the admission that it has a limit. Conduct may be founded on the hard rock or the wet marshes, but after a certain point I don’t care what it’s founded on. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction—Gatsby, who represented everything for which I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which is dignified under the name of the “creative temperament”—it was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again. No—Gatsby turned out all right at the end; it is what preyed on Gatsby, what foul dust floated in the wake of his dreams that temporarily closed out my interest in the abortive sorrows and short-winded relations of men.",
            "marks": []
          }
        ],
    },  
  ]
}

const updateTimedelta = 1000

let lastUpdatedAt = new Date().getTime()

function updateEditor(editor) {
  const json = editor.getJSON()
  const { from, to } = editor.state.selection
  const { data } = $fetch("/api/v1.0.0/analyzer/analyze-document", {
    method: "POST",
    body: json,
    onResponse({ request, response, options }) {
      editor.commands.setContent(response._data)
      editor.commands.setTextSelection({ from, to })    
    },
  })
}

function maybeUpdate(editor) {
  const maybeUpdatedAt = new Date().getTime()
  const currentTimedelta = maybeUpdatedAt - lastUpdatedAt

  if (currentTimedelta > updateTimedelta) {
      console.log("updating")
      updateEditor(editor)
    }
}

const editor = useEditor({
  content: initialContent,
  extensions: [
    LengthMark,
    FatigueMark,
    EditorDocument,
    EditorParagraph,
    EditorText,
    History,
  ],
  onUpdate: ({ editor }) => {
    lastUpdatedAt = new Date().getTime()
    setTimeout(function () { maybeUpdate(editor) }, updateTimedelta)
  },
  onCreate: ({ editor }) => {
    updateEditor(editor)
  },
})
</script>

<style lang="scss">
@import "~/assets/scss/abstracts/_variables.scss";

.editor {
  margin-bottom: 54px;

  &--header {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 81px;
    padding-bottom: 36px;
  }

  &--body {
    margin-left: 20px;
    margin-right: 20px;
  }

  &--textarea {
    background-color: #f0f0f0;
    width: 100%;
    height: 100%;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 18px;
    padding-bottom: 27px;
    border-radius: 3px;
  }

  &--description .p--wrapper {
    margin-bottom: 36px;
  }

  &--buttons {
    margin-bottom: 18px;
  }

  &--button {
    cursor: pointer;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 3px 9px;
    border-radius: 3px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

  &--button:hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }

  &--paragraph {
    margin-bottom: 9px;
  }

  // Short
  &--sentence__length1 {
    background-color: hsl(110, 90%, 88%);
  }
  &--sentence__length2 {
    background-color: hsl(120, 75%, 80%);
  }

  // Medium
  &--sentence__length3 {
    background-color: hsl(200, 100%, 90%);
  }
  &--sentence__length4 {
    background-color: hsl(210, 100%, 88%);
  }
  &--sentence__length5 {
    background-color: hsl(220, 100%, 86%);
  }
  &--sentence__length6 {
    background-color: hsl(230, 100%, 84%);
  }
  &--sentence__length7 {
    background-color: hsl(240, 100%, 82%);
  }

  // Long
  &--sentence__length8 {
    background-color: hsl(345, 75%, 90%);
  }
  &--sentence__length9 {
    background-color: hsl(350, 50%, 85%);
  }
  &--sentence__length10 {
    background-color: hsl(355, 50%, 80%);
  }

  @for $index from 0 through 100 {
    &--fatigue__value#{$index} {
      background-color: rgba(64, 64, 64, $index * 0.0125);
    }
  }
}

@media (min-width: $width-md) {
  .editor {
    &--header {
      padding-left: 15vw;
      padding-right: 15vw;
    }

    &--body {
      margin-left: 15vw;
      margin-right: 15vw;
    }
  }
}

</style>