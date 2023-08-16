<template>
  <div class="editor">
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
    <div class="row">
      <div class="col-7-md">
        <textarea id="textarea" @keydown.enter="analyze">Input your text here.</textarea>
      </div>
      <div class="off-8-md col-7-md">
        <div class="editor--text">
          <ContentParagraph 
            contenteditable="true" 
            v-for="(paragraph, paragraphIndex) in editor.paragraphs.collection" 
            :key="paragraphIndex"
          >
            <EditorNode 
              v-for="(child, childIndex) in paragraph.sentences.collection" 
              :category="child.category"
              :spans="child.spans" 
              :key="childIndex" 
              :content="child.content"
              :length="child.length"
              :percentage="child.length_percentage"
            />
          </ContentParagraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = useContent()
content.setDefaultCategory()

const editor = useEditor()

const page = {
  descriptions: [
    "This text editing application is my take on Gary Provost’s brilliant “Write Music” idiom. The lack of tempo is — according to me — the number three most often seen editing flaw in fiction writing.", 
    "What makes a good tempo? Mainly two things: don’t make your sentences too lengthy, and don’t repeat same-length sentences too many times. This application highlights the length of your sentences and predicts the expected fatigue of your reader. Green means higher tempo, purple means lower tempo, and blue is somewhere in between. The greyer your text, the bigger the predicted fatigue of your reader.", 
    "Since this application utilizes machine learning algorithms, the more you type, the better it understands your writing style. Try to paste here at least 1000 words — you may not see correctly adjusted results before that point. Hopefully, this tool can help you see the big picture without re-reading every time. Be aware also that this application is stateless — I can’t read whatever you paste here, and it is not saved anywhere. The source code is open.",
  ]
}

function analyze(event : Event) {
  var content = document.getElementById("textarea").value;
  editor.analyze(content)
}
</script>

<style lang="scss" scoped>
#textarea {
  background-color: #dcdcdc;
  width: 100%;
  height: 100%;

  padding-left: 18px;
  padding-right: 18px;
  padding-top: 27px;
  padding-bottom: 36px;
  border-radius: 9px;
}

.editor {
  margin-bottom: 54px;
}

.editor--description .p-wrapper {
  margin-bottom: 36px;
}

.editor--text {
  border: 1px solid #bebebe;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 27px;
  padding-bottom: 36px;
  border-radius: 9px;
}

</style>
