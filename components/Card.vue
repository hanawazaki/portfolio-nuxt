<template>
  <div
    class="card relative mx-auto max-w-[385px] max-h-[520px] text-start w-auto rounded-xl mb-5 md:mb-10 border border-black transition-all duration-300 ease-in-out transform"
  >
    <div class="flex h-auto absolute z-10 right-0 top-2">
      <a
        target="_blank"
        :href="project.link"
        class="w-8 p-1 mr-2 bg-white rounded-full mb-2 transition-all duration-300 ease-in-out hover:scale-105"
      >
        <img
          src="../assets/images/github.svg"
          :alt="project.name"
          class="w-[1.5rem] m-auto h-auto"
        />
      </a>
    </div>
    <img
      class="card-img-top w-full pt-5 xxl:h-auto rounded-t-xl"
      src="../assets/images/laptop.svg"
      alt="project"
    />

    <div class="card-body px-5 py-2">
      <a
        href="#"
        class="flex flex-row items-center gap-2 transition-all ease-in duration-150 hover:scale-105"
      >
        <h4
          class="card-title text-base font-medium my-3 lg:text-lg xxl:text-2xl"
        >
          {{ project.name }}
        </h4>
        <i
          v-html="arrow"
          class="text-base md:text-[1.25rem] md:leading-5 text-center"
        ></i>
      </a>
      <p class="card-text text-xs lg:text-base">
        {{ project.description }}
      </p>
      <div class="card-categories flex mt-8 items-center">
        <div
          class="pills"
          v-for="(skill, index) in project.categories"
          :key="index"
        >
          <div
            class="border border-black px-2 py-2 md:px-4 md:py-2 rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium text-xs md:text-xs xxl:text-base"
          >
            {{ skill }}
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Pill from "../components/Pill.vue";

const arrow = ref("&UpperRightArrow;");
const props = defineProps({
  project: {
    type: Object,
  },
});
</script>
