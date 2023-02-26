<template>
    <div class="grid grid-cols-3 gap-4">
        <div
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="bg-white p-5"
        >
        <NuxtLink :to="blogPost._path">
        <h3 class="">
                    {{ blogPost.title }}
                  </h3>
                  <BlogPostMeta
                    :author="blogPost.author"
                    :date="blogPost.dates.published"
                  />

                </NuxtLink>
  </div>
</div>
</template>

<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<style scoped>

h3{
  color: #22c55d;
}
</style>