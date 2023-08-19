import imageUrlBuilder from '@sanity/image-url'


export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)
  
  function urlForImage(source) {
      return builder.image(source).auto('format')
  }
  
  return {
    provide: { urlForImage }
  }
})
