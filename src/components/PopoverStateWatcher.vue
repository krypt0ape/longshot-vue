<script setup>
// Annoying hack we need to use as headless doens't expose a close event on popover
import { computed, watch } from "vue";

const props = defineProps({
	open: Boolean,
});

const emit = defineEmits(["change"]);
const isOpen = computed(() => props.open);

watch(isOpen, (val) => {
	emit("change", val);
});
</script>
