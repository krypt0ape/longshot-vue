<script setup>
import {computed} from 'vue'
import {RouterLink} from 'vue-router'

const props = defineProps({
  post: "required",
});

const endsAt = computed(()=>{
	if(! props.post.fields.endTime) return false;

	const date = new Date(props.post.fields.endTime);
  	return date.toLocaleDateString();
})
</script>
<template>
  <div class="blog-post-preview overflow-hidden">
    <div>
      <img :src="post.fields.image.fields.file.url" class="w-full" alt="featured image" />
    </div>
    <div class="p-[30px]">
      <p  class="text-white text-lg font-medium mb-1">
        {{ post.fields.title }}
	  </p>
      <p v-if="endsAt" class="text-brand-grey mb-2">Ends On {{ endsAt }}</p>
	  <p v-else class="text-brand-grey mb-2">Ongoing</p>
      <div class="ml-2 mt-4 flex justify-between">
        <RouterLink class="font-medium text-brand-grey cursor-pointer hover:text-brand-lightGrey"
          :to="`/promotions/${post.fields.slug}`">
          <i class="fa-solid fa-angle-right mr-4" />Read More
        </RouterLink>
        <RouterLink :to="'/promotions/category/' + post.fields.postCategory.fields.slug"
          class="flex space-x-4  items-center text-brand-grey cursor-pointer hover:text-white transition">
          <i :class="post.fields.postCategory.fields.icon" class=" text-2xl" />
          <p class="font-semibold ">{{ post.fields.postCategory.fields.name }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style>
.blog-post-preview {
  border-radius: 10px;
  background: linear-gradient(137deg, #202d3c 24.01%, #0d1824 73.28%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
