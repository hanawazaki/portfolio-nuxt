<template>
  <!-- nav hero -->
  <section class="grid md:flex items-center lg:px-[100px] my-10">
    <div class="md:w-1/2 p-4">
      <h6 class="mb-3 font-medium text-lg">I'm Hairul Ardhan Nawazaki</h6>
      <h1 class="text-3xl lg:text-5xl font-medium mb-2">Web Developer</h1>
      <p class="text-gray-600 mb-4 md:w-[85%]">
        Helping you get your desired tech experience through websites and apps
      </p>
      <button
        @click="scrollMe"
        class="btn-download p-[8px] rounded-[12px] text-[20px] border border-black md:p-[12px] transition-all ease-in duration-200 hover:bg-black hover:text-white"
      >
        <span class="flex flex-row font-normal text-lg md:text-sm">
          Lets connect!</span
        >
      </button>
    </div>
    <div class="md:w-1/2 p-4">
      <img
        src="../assets/images/hero-image.png"
        alt="Image"
        class="w-full h-auto"
      />
    </div>
  </section>

  <!-- projects -->
  <section class="projects mt-100px mb-10 md:mb-100px mx-auto lg:px-[100px]">
    <h1 class="projects__title text-2xl font-medium text-center mb-4">
      My latest projects
    </h1>
    <div
      class="projects__list p-4 grid grid-cols-1 sm:grid-cols-3 md:space-x-5 lg:justify-center lg:space-x-6"
    >
      <Card
        v-for="(project, index) in projects"
        :project="project"
        :key="index"
      />
    </div>
    <routerLink to="/works" class="">
      <h4 class="text-center text-lg font-medium">
        View all projects &UpperRightArrow;
      </h4>
    </routerLink>
  </section>

  <!-- contact -->
  <section id="contact" class="contact lg:px-[100px] mx-auto">
    <div class="p-4">
      <div
        class="contact__box flex flex-col justify-between text-center border border-black rounded-xl p-8"
      >
        <div class="contact__text mb-8 md:w-auto">
          <h4 class="font-medium text-2xl md:text-4xl md:mb-8">
            Let's connect!
          </h4>
          <p class="font-normal text-md md:text-2xl xl:w-700">
            Is there a project of mine that is similar to your needs?
            <br />let's work together or just send me friendly hello
          </p>
        </div>
        <div
          class="contact__socmed flex justify-center flex-col md:flex-row text-center md:items-center"
        >
          <Socmed />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { ref, onMounted } from "vue";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const projects = ref([
  {
    id: 1,
    name: "Luxspace laravel",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["laravel", "tailwind"],
  },
  {
    id: 2,
    name: "Vue Chat app",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["vuejs", "firebase"],
  },
  {
    id: 3,
    name: "Cook Recipes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quisquam minus fugit corporis sapiente odit voluptatum voluptatem, harum perferendis cumquimpedit maxime officiis autem natus.",
    link: "#",
    github: "",
    categories: ["Reactjs", "firebase"],
  },
]);

const scrollMe = () => {
  const contactElement = document.getElementById("contact");
  contactElement.scrollIntoView({ behavior: "smooth" });
};

const breakpoints = ref({
  768: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});
</script>

<style>
.img-hero {
  margin-right: 0 !important;
}

.contact__box {
  box-shadow: 13px 17px 0px #000000;
}
</style>
