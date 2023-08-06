<template>
  <div class="editor">
    <div class="row">
      <div class="col-7-md">
        <textarea id="textarea" @keydown.enter="analyze">Input your text here.</textarea>
      </div>
      <div class="off-8-md col-7-md">
        <div class="editor--text">
          <ContentParagraph v-for="(paragraph, paragraphIndex) in editor.paragraphs.collection" :key="paragraphIndex">
            <span class="editor--sentence" v-for="(sentence, sentenceIndex) in paragraph.sentences.collection" :key="sentenceIndex">          
              <span class="editor--token" v-for="(token, tokenIndex) in sentence.tokens.collection" :key="tokenIndex">          
              {{ token.content }}
              </span>
            </span>
          </ContentParagraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blog",
})

const content = useContent()
content.setDefaultCategory()

const editor = useEditor()

function analyze(event : Event) {
  (event.target as HTMLInputElement).blur()
  var content = document.getElementById("textarea").value;
  editor.analyze(content)
}

</script>

<style>
#textarea {
  background-color: #dcdcdc;
  width: 100%;
  height: auto;
}
</style>