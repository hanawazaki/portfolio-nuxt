<template>
  <button
    @click="() => handleFilter(categories)"
    class="border border-black rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium text-xs md:text-xs xxl:text-base hover:bg-black hover:text-white"
    :class="{
      'px-2 py-2 md:px-4 md:py-2': size === 'lg',
      'px-2': size !== 'lg',
      'bg-gray-600 text-white': isSelected === categories,
    }"
  >
    {{ categories }}
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  categories: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    default: "sm",
  },
  isSelected: {
    type: String,
    default: "All",
  },
});

const selectedPill = ref("");
//
const emit = defineEmits(["filter"]);

const handleFilter = (categories) => {
  selectedPill.value = categories;
  emit("filter", selectedPill.value);
};
</script>
