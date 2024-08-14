<script setup>
import Input from "@/components/Form/Input.vue";
import {ref} from "vue";
import { debounce } from "lodash";
import useAsyncApi from "@/composables/useAsyncApi";

const props = defineProps({
	error: String
});


const model = defineModel();

const {data, call, loading} = useAsyncApi("GET", "/auth/check-username");

const checkUsername = debounce(async (e) => {
	call({
		params: {
			username: e.target.value
		}
	})
}, 500); 
</script>
<template>
	<div>
		<p class="text-brand-lightGrey">
			Username <span class="text-red-600">*</span>
		</p>
		<Input
			name="username"
			class="mt-1 w-full"
			v-model="model"
			:error="data && ! loading ? 'Usernamealready exists' : null"
			@input="checkUsername"
		/>
	</div>
</template>
