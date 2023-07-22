export const useCounter = defineStore('counter', {
  state: () => ({
    result: "",
  }),

  actions: {
    update() {
      var textarea = document.getElementById("textarea2")
      var text = textarea.value;
      var sentences = text.match( /[^\.!\?]+[\.!\?]+/g );
      
      var result = "";
      for (const sentence of sentences) {
        var word_index = 0;
        var clean = sentence.trim();    

        var words = clean.split(" ")
        for (const word of words) {
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
      }
      
      this.result = result;
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}