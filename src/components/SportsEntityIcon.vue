<script setup>
import { computed, defineProps } from "vue";

const { entity, name } = defineProps({
  entity: {
    required: true,
    type: String,
    validate(value) {
      return ["sport", "category"].includes(value);
    },
  },
  name: {
    required: true,
    type: String,
  },
});

const sport = computed(() => {
  switch (name.toLowerCase()) {
    case "basketball":
      return "fa-solid fa-basketball";
    case "tennis":
      return "fa-solid fa-tennis-ball";
    case "soccer":
    default:
      return "fa-solid fa-futbol";
  }
});

const category = computed(() => {
  switch (name.toLowerCase()) {
    case "england":
    default:
      return "fa-duotone fa-flag";
  }
});

const tournament = computed(() => {
  switch (name.toLowerCase()) {
    case "england":
    default:
      return "fa-duotone fa-flag";
  }
});

const className = computed(() => {
  switch (entity.toLowerCase()) {
    case "sport":
      return sport.value;
    case "category":
      return category.value;
    case "tournament":
      return tournament.value;
    default:
      throw new Error("Unknown entity");
  }
});
</script>
<template>
  <i :class="className"></i>
</template>
