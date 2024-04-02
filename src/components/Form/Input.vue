<script setup>
import { Transition, onMounted, ref } from "vue";

const model = defineModel()

const props = defineProps({
  type: {
    default: "text",
  },
  placeholder: {},
  error: String,
  label: String,
  disabled: {
    default: false,
    type: Boolean,
  },
});

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute("autofocus")) {
    input.value.focus();
  }
});

const onInput = ({ target }) => {
  let value
  if (props.type === 'checkbox') {
    value = target.checked
  } else {
    value = target.value
  }
  model.value = value
}

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <div class="relative">
    <div v-if="$slots.left" class="absolute left-2 top-0 flex items-center h-full">
      <slot name="left"></slot>
    </div>
    <div class="flex items-center">
      <input id="input" ref="input" :type="type" autocomplete="one-time-code" :class="[
      'input text-brand-lightGrey ring-0 focus-visible:outline-none',
      disabled ? 'cursor-not-allowed  text-brand-darkerGrey opacity-80' : '',
      $slots.left ? 'pl-[90px]' : 'pl-4',
      label ? '' : 'w-full'
    ]" :value="model" :placeholder="placeholder" :disabled="disabled" @input="onInput" :bind="$attrs" />
      <label v-if="label" for="input" class="text-white cursor-pointer ms-2 text-sm font-medium dark:text-gray-300">{{
      label }}</label>
    </div>
    <div class="absolute top-0 h-[51px] flex items-center right-1">
      <slot />
    </div>
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <p v-if="error" class="text-red-500 font-medium pt-2 bg-dark rounded-b-lg w-full">
        <i class="fa-solid fa-times mr-2" />{{ error }}
      </p>
    </Transition>
  </div>
</template>
<style>
.input {
  /* background: linear-gradient(137.76deg, #303650 26.98%, #24293c 86.43%),
		linear-gradient(0deg, #303750, #303750);
	border: 1px solid #303750;
	box-shadow: 0px 2px 3px 0px #00000040; */
  border-radius: 5px;
  border: 1px solid #303750;
  background: #24293C;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 16px 20px 16px 20px;
  border-radius: 5px;
}

.input::placeholder {
  color: #93a3af;
}
</style>
