<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false
  },
  large: { defaut: false, type: Boolean },
  xlarge: { defaut: false, type: Boolean },
  small: { defaut: false, type: Boolean },
  xsmall: { defaut: false, type: Boolean },
})

const size = computed(() => {
  if (props.large) return "px-6 py-2  text-md tracking-wider  rounded-lg";
  if (props.xlarge) return "px-8 py-4 text-xl tracking-wider rounded-xl";
  if (props.small) return "px-3 py-1 text-sm rounded-2xl";
  if (props.xsmall) return "px-2.5 py-1 text-xs rounded-md";
  return "px-[16px] py-[13px] text-md  rounded-lg";
});

const classString = computed(() => {
  let str = "transition  text-white   base-btn tracking-wide";
  if (props.disabled) {
    str += " opacity-30 cursor-not-allowed ";
  } else {
    str += " cursor-pointer  hover:opacity-80";
  }
  return str + " justify-center items-center " + size.value;

})
</script>
<template>
  <component :is="props.as" v-bind="$attrs" :class="classString" class="focus:ring-0 focus:ring-offset-0">
    <slot />
  </component>
</template>
<style>
.base-btn {
  border-radius: 10px;
  line-height: 13px;		
  font-weight: 600;
  display: inline-flex;
}
.base-btn:focus-visible  {
	outline: 2px solid #A4ADBD;
  	outline-offset: 2px;
}
</style>