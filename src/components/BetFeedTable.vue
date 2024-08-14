<script setup>
import BetFeedItem from "./BetFeedItem.vue";
import {computed} from "vue";

const props = defineProps({
	headings: Array,
	items: Array,
});

const alignment = computed(()=>{
	return props.headings.map((heading)=>{
		return heading.align;
	})
})	
// TODO come back here and do this thing
// add 5 to the variavle props.heading
const addFive = (props) => {
	return props.headings.map((heading)=>{
		return heading.align + 5;
	})
}
</script>
<template>
	<div class="mt-[20px] mb-[60px]">
		<div class="grid grid-cols-6 mt-[30px] mb-[20px] mx-[25px]">
			<div v-for="heading in headings" :key="heading.text">
				<p 
					class="text-brand-grey   font-semibold"
					:class="{
						'text-right': heading.align === 'right',
						'text-center': heading.align === 'center',
						'text-left': heading.align === 'left'						
					}"
				>{{ heading.text }}</p>
			</div>
		</div>
		<BetFeedItem v-for="(item, index) in items" :bet="item" :key="item.id" :index="index" :alignment="alignment"/>
	</div>
</template>
