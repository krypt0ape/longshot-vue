<script setup>
defineProps({
  post: {},
});
</script>
<template>
  <div class="grid grid-cols-3 blog-post-featured overflow-hidden">
    <div class="col-span-2">
      <img :src="post.fields.image.fields.file.url" class="w-full" alt="featured image" />
    </div>
    <div class="flex items-center px-[60px]">
      <div>
        <NuxtLinkLocale :to="'/blog/category/' + post.fields.postCategory.fields.slug"
          class="flex space-x-4 mb-6 text-[#FFC700] cursor-pointer hover:text-white transition">
          <i :class="post.fields.postCategory.fields.icon" class=" text-2xl" />
          <p class="font-semibold text-lg">{{ post.fields.postCategory.fields.name }}</p>
        </NuxtLinkLocale>
        <h3 class="text-brand-lightGrey mb-4 text-2xl font-bold">{{ post.fields.title }}</h3>
        <p class=" mb-4 overflow-hidden text-brand-darkerGrey h-[75px]">{{ post.fields.summary }}...</p>
        <NuxtLinkLocale class="text-brand-darkerGrey " :to="`/blog/${post.fields.slug}`">
          <i class="fa-solid fa-circle-chevron-right text-brand-dark mr-2" /> Read More
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
<style>
.blog-post-featured {
  border-radius: 10px;
  background: linear-gradient(137deg,
      rgba(32, 45, 60, 0.5) 24.01%,
      rgba(13, 24, 36, 0.5) 73.28%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
