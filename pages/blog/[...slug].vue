<script setup>
const { path } = useRoute()
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div class="bg-white p-5">
    <TheHero>
      <template v-slot:default><span class="titleArticle">{{ blogPost.title }}</span></template>&nbsp;&nbsp;

      <template v-slot:subtitle>
        <BlogPostMeta
          :author="blogPost.author"
          :date="blogPost.dates.published"
        />
      </template>
    </TheHero>
    <div class=" ">
      <section class="grid grid-rows-4 grid-flow-col gap-4">
        <div class="">
          <section class="">
            <div class="">
              <div class="contentArticle">
                <ContentDoc />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.titleArticle{
  color: #0f5e59;
}
</style>