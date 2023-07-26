export const useEditor = defineStore('editor', {
  state: () => ({
    result: "",
    paragraphs: [{sentences: [{words: [{content: "He"}, {content: "used"}, {content: "to."}]}]}] as object[],
  }),

  actions: {
    update() {
      var paragraph = {sentences: []};


      var text = document.getElementById("textarea").value;
      var sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
      
      var result = "";
      for (const sentence of sentences) {
        var paragraph_sentence = {words: []};

        var word_index = 0;
        var clean = sentence.trim();

        var words = clean.split(" ")
        for (const word of words) {
          var sentence_word = {content: word};
          paragraph_sentence.words.push(sentence_word);

          if (word_index < 50) {
            var length = word_index
          } else {
            var length = "overflow"
          }
          result += "<span class='length-" + length + "'>" + word + " </span>";                

          if (word.endsWith(",")) {
            word_index = word_index - 5
          }
          if (word.endsWith("—")) {
            word_index = word_index - 10
          }
          word_index += 1;
        }

        paragraph.sentences.push(paragraph_sentence);
      }
      
      this.result = result;
      this.paragraphs = [paragraph];
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditor, import.meta.hot))
}
