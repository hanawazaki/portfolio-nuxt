<template>
  <section
    class="projects mt-8 mb-10 md:mb-100px md:mt-[100px] lg:max-w-[80%] mx-auto"
  >
    <h1 class="projects__title text-2xl font-medium text-center mb-8">
      My Projects
    </h1>
    <!-- desktop -->
    <div
      class="pills flex-row flex-wrap px-0 md:px-5 mb-8 xs:h-10 hidden sm-custom:flex"
    >
      <Pill
        :isSelected="selectedSkill"
        size="lg"
        :categories="pill"
        v-for="(pill, index) in pills"
        :key="index"
        @filter="handleFilter"
      />

      <RouterLink
        to="/works"
        class="border border-black px-4 py-2 rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium md:text-xs xxl:text-base hover:bg-black hover:text-white"
        @click="() => handleFilter(categories)"
      >
        All
      </RouterLink>
    </div>

    <!-- mobile -->
    <div class="pills px-0 md:px-5 mb-8 xs:h-10 block sm-custom:hidden">
      <Carousel :settings="settings">
        <Slide v-for="(pill, index) in pills" :key="index">
          <Pill
            :isSelected="selectedSkill"
            size="lg"
            :categories="pill"
            @filter="handleFilter"
          />
        </Slide>
        <RouterLink
          to="/works"
          class="border border-black px-4 py-2 rounded-full w-auto mr-2 mb-2 transition-all ease-in duration-200 font-medium md:text-xs xxl:text-base hover:bg-black hover:text-white"
          @click="() => handleFilter(categories)"
        >
          All
        </RouterLink>
      </Carousel>
    </div>
    <div
      v-if="filteredProjects.length > 0"
      class="projects__list grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:gap-5 md:grid-cols-3"
    >
      <Card
        v-for="(project, index) in filteredProjects"
        :project="project"
        :key="index"
      />
    </div>
    <div v-else>
      <h1 class="flex justify-center text-base font-medium italic">
        Tidak ada data
      </h1>
    </div>
  </section>
</template>

<script setup>
import Card from "../../components/Card.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Pill from "../../components/Pill.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const pills = ref([
  "Javascript",
  "Sass",
  "Tailwind",
  "Bootstrap",
  "vueJs",
  "ReactJs",
  "Laravel",
  "InertiaJs",
  "NuxtJs",
  "NextJs",
  "Pinia",
  "Wordpress",
  "Webflow",
]);

const projects = ref([
  {
    id: 1,
    name: "Luxspace laravel",
    description:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    link: "#",
    github: "",
    categories: ["Laravel", "Tailwind"],
  },
  {
    id: 2,
    name: "Vue Chat app",
    description:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    link: "#",
    github: "",
    categories: ["vueJs", "firebase"],
  },
  {
    id: 3,
    name: "Cook Recipes",
    description:
      "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
    link: "#",
    github: "",
    categories: ["Reactjs", "firebase"],
  },
]);

const settings = ref({
  itemsToShow: 10,
  snapAlign: "start",
});

const filteredProjects = ref([]);
const selectedSkill = ref();

const router = useRouter();
onMounted(() => {
  const currentRoute = router.currentRoute.path;
  const getFilter = router.currentRoute.value.query.filter;

  selectedSkill.value = getFilter;
  console.log("getFilter", getFilter);
  console.log("selectedSkill", selectedSkill.value);
  if (getFilter) {
    handleFilter(getFilter);
  } else {
    filteredProjects.value = projects.value;
  }
});

const handleFilter = (skill) => {
  selectedSkill.value = skill;

  if (skill !== "" && skill !== undefined) {
    filteredProjects.value = projects.value.filter((item) =>
      item.categories
        .map((category) => category.toLowerCase())
        .includes(skill.toLowerCase())
    );
  } else {
    filteredProjects.value = projects.value;
  }
};

const breakpoints = ref({
  425: {
    itemsToShow: 10,
    snapAlign: "start",
  },
});
</script>

<style>
/* .projects__list:last-child {
  gap: 0;
} */
</style>
