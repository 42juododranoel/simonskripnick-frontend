const DEFAULT_CATEGORY = {
    name: 'Simon Skripnick',
    emoji: '💪(ФωФ💪',
}

export const useContent = defineStore('content', {
    state: () => ({
        category: DEFAULT_CATEGORY as object,
        post: {} as object,
        categories: [] as object[],
        posts: [] as object[],
        tags: [] as object[],
    }),
  
    actions: {
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

        async setDefaultCategory() {
			this.category = DEFAULT_CATEGORY
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

        async getPost(post: String) {
            const query = groq`*[_type == "post" && slug.current == "${post}"][0] {...}`
			const { data } = await useSanityQuery(query)
			this.post = data.value
        },          
    },
})
