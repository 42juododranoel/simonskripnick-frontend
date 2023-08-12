<template>
  <div class="editor">
    <div class="row">
      <div class="col-7-md">
        <textarea id="textarea" @keydown.enter="analyze">Input your text here.</textarea>
      </div>
      <div class="off-8-md col-7-md">
        <div class="editor--text">
          <ContentParagraph v-for="(paragraph, paragraphIndex) in editor.paragraphs.collection" :key="paragraphIndex">
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
definePageMeta({
  layout: "blog",
})

const content = useContent()
content.setDefaultCategory()

const editor = useEditor()

function analyze(event : Event) {
  // (event.target as HTMLInputElement).blur()
  var content = document.getElementById("textarea").value;
  editor.analyze(content)
}

</script>

<style lang="scss" scoped>
#textarea {
  background-color: #dcdcdc;
  width: 100%;
  height: 100%;
}
</style>
