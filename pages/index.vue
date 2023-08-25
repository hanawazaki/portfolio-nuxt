<template>
  <!-- nav hero -->
  <section class="hero my-8 md:my-[75px] mx-auto max-w-7xl">
    <div class="w-full px-2 sm:px-6 lg:px-[100px]">
      <div class="flex flex-col sm:flex-row sm:justify-between items-center">
        <div class="left w-full md:mb-0 sm:w-6/12 sm:max-w-[432px]">
          <div class="hero-text-wrapper flex flex-col gap-4">
            <div class="heading-hero">
              <h1 class="text-lg font-medium">I'm Hairul Ardhan Nawazaki</h1>
              <h1
                class="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-0"
              >
                Frontend <br />Web Developer
              </h1>
            </div>
            <div class="contact-me mb-5">
              <h5
                class="text-sm font-normal sm:text-sm lg:text-lg sm:pr-5 md:text-lg"
              >
                Helping you understand your desired tech experience through
                websites and apps
              </h5>
            </div>
          </div>
          <button
            @click="scrollMe"
            class="btn-download p-[8px] rounded-[12px] text-[20px] border border-black md:p-[12px] transition-all ease-in duration-200 hover:bg-black hover:text-white"
          >
            <span class="flex flex-row font-normal text-lg md:text-sm">
              Lets connect!</span
            >
          </button>
        </div>
        <div
          class="right hidden w-full sm:w-6/12 sm:flex max-w-[529px] max-h-[360px]"
        >
          <img
            class="img-hero w-full inline-block"
            src="../assets/images/hero-image.png"
            alt="hero-img"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- projects -->
  <section class="projects mt-100px mb-10 md:mb-100px mx-auto max-w-[1080px]">
    <h1 class="projects__title text-2xl font-medium text-center mb-8">
      My latest projects
    </h1>
    <div
      class="projects__list grid grid-cols-1 sm:grid-cols-3 sm:gap-3 md:gap-5 lg:justify-center lg:gap-10"
    >
      <Card
        v-for="(project, index) in projects"
        :project="project"
        :key="index"
      />
    </div>
    <routerLink to="/works" class="">
      <h4 class="text-center md:mt-5 text-lg font-medium">
        View all projects &UpperRightArrow;
      </h4>
    </routerLink>
  </section>
  <!-- contact -->
  <section id="contact" class="contact max-w-[1080px] mx-auto">
    <div
      class="contact__box flex flex-col justify-between text-center md:px-8 md:py-12 border border-black rounded-xl px-5 py-5 xl:pl-[122px]"
    >
      <div class="contact__text mb-8 md:w-auto">
        <h4 class="font-medium text-2xl md:text-4xl md:mb-8">Let's connect!</h4>
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
