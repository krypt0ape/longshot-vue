<script setup>
import { Transition, onMounted, ref, getCurrentInstance } from "vue";

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
  readonly: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["blur"]);

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

defineExpose({ focus: () => input.value.focus(), input });

const instance = getCurrentInstance()

const id = ref(instance.uid)

const handleBlur = () => {
 	emit('blur', model.value)
}
</script>

<template>
  <div>
    <label v-if="label && type !== 'checkbox'" :for="id"
      class="text-white cursor-pointer ms-2 text-sm font-medium dark:text-gray-300">{{
      label }}</label>
    <div class="relative">
      <div v-if="$slots.left" class="absolute left-2 top-0 flex items-center h-full">
        <slot name="left"></slot>
      </div>
      <div class="flex items-center">
        <input :id="id" ref="input" :readonly="readonly" :type="type"  :class="[
      'app-input text-brand-lightGrey ring-0 focus-visible:outline-none bg-brand-bodyBg  border-solid border',
      disabled ? 'cursor-not-allowed  text-brand-darkerGrey opacity-80' : '',
	  error ? 'border-red-500' : 'border-brand-accentStroke',
      $slots.left ? 'pl-[90px]' : 'pl-4',
      label && type === 'checkbox' ? '' : 'w-full'
    ]" :value="model" :placeholder="placeholder" :disabled="disabled" @input="onInput" v-bind="$attrs" @blur="handleBlur"/>
        <label v-if="label && type === 'checkbox'" :for="id"
          class="text-white cursor-pointer ms-2 text-sm font-medium dark:text-gray-300">{{
      label }}</label>
      </div>
      <div class="absolute top-0 h-[51px] flex items-center right-1">
        <slot />
      </div>
      <div v-if="$slots.right" class="absolute right-0 top-0 flex items-center h-full">
        <slot name="right"></slot>
      </div>
      <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
        <p v-if="error" class="text-red-500 text-right opacity-75 font-medium pt-1 absolute right-0 -bottom-[25px] text-sm bg-dark rounded-b-lg w-full">
          {{ error }}
        </p>
      </Transition>
    </div>
  </div>
</template>
<style>
.app-input {
  border-radius: 5px !important;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25) !important;
  padding: 8px 12px !important;
  border-radius: 5px !important;
}

.app-input::placeholder {
  color: #93a3af !important;
}
</style>
