<script setup>
import NeutralButton from "@/components/Buttons/NeutralButton.vue";

const emit = defineEmits(["next", "prev", "skipTo"]);
const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const next = () => emit("next");
const prev = () => emit("prev");
const skipTo = (page) => emit("skipTo", page);
</script>
<template>
<div>
	  <div class="flex justify-center items-center">
	<NeutralButton
	  :disabled="currentPage === 1"
	  @click="prev"
	  class="text-sm mr-4"
	>
	  Previous
	</NeutralButton>
	<a
	  v-for="page in totalPages"
	  :key="page"
	  @click="() => skipTo(page)"
	  :class="[
		page === currentPage ? 'text-brand-lightGrey' : 'text-brand-grey',
		]"
	  class="text-sm px-3 cursor-pointer hover:text-brand-lightGrey transition-colors" 
	>
	  {{ page }}
	</a>
	<NeutralButton
	  :disabled="currentPage == totalPages"
	  @click="next"
	  class="text-sm ml-4"
	>
	  Next
	</NeutralButton>
  </div>
</div>
</template>