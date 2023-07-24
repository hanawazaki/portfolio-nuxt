<template>
  <select
    name="skills"
    id="skills"
    class="w-full px-4 py-2 border rounded-lg border-black"
    v-model="selectedOption"
  >
    <option value="" class="px-4 py-2">Select All</option>
    <option
      :value="option"
      class="px-4 py-2"
      v-for="(option, index) in options"
      :key="index"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
  },
});

const selectedOption = ref("");

const handleInput = (event) => {
  selectedOption = event.target.value;
  emit("update:event", selectedOption.value);
};
</script>

<style lang="scss" scoped></style>
