<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
	name: "required",
	icon: "",
	to: "required",
	active: "",
});

const active = computed(() => {
	return route.path === props.to;
});
</script>
<template>
	<RouterLink :to="to">
		<div
			:class="[
				'flex items-center pb-[20px]  border-b-2 group ',
				active ? 'border-brand-green' : 'border-transparent',
			]"
		>
			<i
				v-if="icon"
				:class="[
					icon,
					'text-xl  group-hover:text-brand-lightGrey',
				active ? 'text-brand-lightGrey' : 'text-brand-grey',
				]"
			/>
			<slot v-else />
			<p
				:class="[
					'text-md font-medium  group-hover:text-brand-lightGrey ml-3',
					active ? 'text-brand-lightGrey' : 'text-brand-grey',
				]"
			>
				{{ name }}
			</p>
		</div>
	</RouterLink>
</template>
