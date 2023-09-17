<template>
  <div class="editor">
    <div class="editor--header">
      <div class="row">
        <div class="col-8-md">
          <ContentHeading1 v-typograph-content>Text Tempo Editor</ContentHeading1>
        </div>
      </div>   
      <div class="row">
        <div class="col-10-md editor--description">
          <ContentParagraph
            v-typograph-content
            v-for="(paragraph, paragraphIndex) in page.descriptions"
            :key="paragraphIndex"
          >
            {{ paragraph }}
          </ContentParagraph>
        </div>
      </div>
    </div>
    <div class="editor--body">
      <div class="row">
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
import { mergeAttributes } from "@tiptap/core"
import { Mark } from "@tiptap/core"

const FatigueMark = Mark.create({
  name: "fatigue",
  renderHTML({ HTMLAttributes }) {
    return ["span", {class: `editor--fatigue__length${HTMLAttributes.value}`}, 0]
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
          "text": "How is it going? Nice! I am here.",
          "marks": [
            {
              "type": "fatigue"
            },
            {
              "type": "length"
            }
          ]
        }
      ],
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "How is it going? Nice! I am here. Ha-ha."
        }
      ]
    }
  ]
}

const editor = useEditor({
  content: initialContent,
  extensions: [
    FatigueMark,
    LengthMark,
    EditorDocument,
    EditorParagraph,
    EditorText,
  ],
  onUpdate: ({ editor }) => {
    const json = editor.getJSON()
    const { from, to } = editor.state.selection

    console.log("json:", json)
    const { data } = $fetch("/api/v1.0.0/analyzer/analyze-document", {
      method: "POST",
      body: json,
      onResponse({ request, response, options }) {
        console.log("response:", response._data)
        editor.commands.setContent(response._data)
        editor.commands.setTextSelection({ from, to })    
      },
      onResponseError({ request, response, options }) {}
    })
  },
})

const content = useContent()
content.setDefaultCategory()

const page = {
  descriptions: [
    "This text editing application is my take on Gary Provost’s brilliant “Write Music” idiom. The lack of tempo is — according to me — the number three most often seen editing flaw in fiction writing.",
    "What makes a good tempo? Mainly two things: don’t make your sentences too lengthy, and don’t repeat same-length sentences too many times. This application highlights the length of your sentences and predicts the expected fatigue of your reader. Green means higher tempo, purple means lower tempo, and blue is somewhere in between. The greyer your text, the bigger the predicted fatigue of your reader.",
    "Since this application utilizes machine learning algorithms, the more you type, the better it understands your writing style. Try to paste here at least 1000 words — you may not see correctly adjusted results before that point. Hopefully, this tool can help you see the big picture without re-reading every time. Be aware also that this application is stateless — I can’t read whatever you paste here, and it is not saved anywhere. The source code is open.",
  ],
}
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
    background-color: #dcdcdc;
    width: 100%;
    height: 100%;

    padding-left: 18px;
    padding-right: 18px;
    padding-top: 27px;
    padding-bottom: 36px;
    border-radius: 9px;
  }

  &--description .p--wrapper {
    margin-bottom: 36px;
  }

  &--sentence__length1 {
    background-color: hsl(100, 100%, 85%);
  }
  &--sentence__length2 {
    background-color: hsl(130, 100%, 85%);
  }
  &--sentence__length3 {
    background-color: hsl(160, 100%, 85%);
  }
  &--sentence__length4 {
    background-color: hsl(180, 100%, 85%);
  }
  &--sentence__length5 {
    background-color: hsl(220, 100%, 85%);
  }
  &--sentence__length6 {
    background-color: hsl(240, 100%, 85%);
  }
  &--sentence__length7 {
    background-color: hsl(260, 100%, 85%);
  }
  &--sentence__length8 {
    background-color: hsl(280, 100%, 85%);
  }
  &--sentence__length9 {
    background-color: hsl(300, 100%, 85%);
  }
  &--sentence__length10 {
    background-color: hsl(320, 100%, 85%);
  }
  &--sentence__length11 {
    background-color: hsl(340, 100%, 85%);
  }
  &--sentence__length12 {
    background-color: hsl(360, 100%, 85%);
  }

  @for $index from 0 through 100 {
    &--span__fatigue#{$index} {
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