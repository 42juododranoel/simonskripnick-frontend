const DEFAULT_CATEGORY = {
    name: 'Simon Skripnick',
    emoji: '💪(ФωФ💪',
}

export const useContent = defineStore('content', {
    state: () => ({
        category: {} as object,
        categories: [] as object[],
        posts: [] as object[],
        post: {} as object,
        tags: [] as object[],
        tag: {} as object,
        book: {} as object,
    }),
  
    actions: {
        async setDefaultCategory() {
			this.category = DEFAULT_CATEGORY
        },

        async setEmptyCategory() {
			this.category = {}
        },

        async setEmptyTags() {
			this.tags = []
        },

        async setEmptyTag() {
			this.tag = {}
        },

        async listCategories() {
			const query = groq`*[_type == "category"] {...}`
            const { data } = await useSanityQuery(query)
			this.categories = data.value
        },

        async listPosts() {
            const query = groq`*[_type == "post"] {..., category->, labels[]->{..., category->{...}}} | order(publishedAt desc)`
			const { data } = await useSanityQuery(query)
			this.posts = data.value
        },

        async getCategory(category: String) {
            const query = groq`*[_type == "category" && slug.current == "${category}"][0] {...}`
			const { data } = await useSanityQuery(query)
			this.category = data.value
        },

        async listCategoryPosts(category: String) {
            const query = groq`*[_type == "post" && category->slug.current == "${category}"] {..., category->, labels[]->{..., category->{...}}} | order(publishedAt desc)`
			const { data } = await useSanityQuery(query)
			this.posts = data.value
        },

        async listCategoryTags(category: String) {
            const query = groq`*[_type == "label" && category->slug.current == "${category}"] {..., category->{...}}`
			const { data } = await useSanityQuery(query)
			this.tags = data.value
        },

        async listCategoryTagPosts(category: String, label: String) {
            const query = groq`*[_type == "post" && category->slug.current == "${category}" && count((labels[]->slug.current)[@ == "${label}"]) > 0] {..., category->, labels[]->{..., category->{...}}} | order(publishedAt desc)`
			const { data } = await useSanityQuery(query)
			this.posts = data.value
        },

        async getPost(post: String) {
            const query = groq`*[_type == "post" && slug.current == "${post}"][0] {...}`
			const { data } = await useSanityQuery(query)
			this.post = data.value
        },

        async getTag(label: String) {
            const query = groq`*[_type == "label" && slug.current == "${label}"][0] {...}`
			const { data } = await useSanityQuery(query)
			this.tag = data.value
        },

        async getBook(book: String) {
            const query = groq`*[_type == "book" && slug.current == "${book}"][0] {..., nodes[]{..., firstPage->, secondPage->}}`
            const { data } = await useSanityQuery(query)
			this.book = data.value
        },          
    },
})
