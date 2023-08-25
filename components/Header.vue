<template>
  <header class="bg-white">
    <nav
      class="pt-12 items-center flex justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
    >
      <RouterLink class="logo" to="/">
        <img
          alt="logo"
          class="w-auto transition-all ease-out duration-300"
          :src="isHovered ? hoveredImageSrc : originalImageSrc"
          @mouseover="toggleHover(true)"
          @mouseout="toggleHover(false)"
        />
      </RouterLink>
      <div class="w-full"></div>
      <div class="navigation__nav w-auto">
        <ul
          id="menu"
          class="navigation__list fixed bg-white inset-0 flex flex-col items-center justify-center mds:visible mds:flex-row mds:bg-transparent mds:relative mds:opacity-100"
          :class="[
            toggle ? 'opacity-0' : 'opacity-100 z-30',
            toggle ? 'invisible' : '',
          ]"
        >
          <li class="navigation__item mx-3 py-6 md:py-0">
            <RouterLink
              @click="handleToggle"
              to="/"
              active-class="active"
              class="navigation__link text-base md:text-lg font-medium"
              >Home</RouterLink
            >
          </li>
          <li class="navigation__item mx-3 py-6 md:py-0">
            <RouterLink
              @click="handleToggle"
              to="/about"
              active-class="active"
              class="navigation__link text-base md:text-lg font-medium"
              >About</RouterLink
            >
          </li>
          <li class="navigation__item mx-3 py-6 md:py-0">
            <RouterLink
              @click="handleToggle"
              to="/works"
              active-class="active"
              class="navigation__link text-base md:text-lg xl:text-xl font-medium"
              >Works</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="w-auto mds:hidden">
        <button
          :class="[
            toggle ? '' : 'fixed',
            toggle ? '' : 'right-0',
            toggle ? '' : 'top-0',
            toggle ? 'relative' : '',
          ]"
          @click="handleToggle"
          id="menu-toggler"
          class="flex z-50 items-center justify-center w-8 h-8 text-black focus:outline-none"
        >
          <svg
            class="fill-current"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
            />
            <path
              d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
            />
            <path
              d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const toggle = ref(true);
const isHovered = ref(false);
const hoveredImageSrc = ref("../assets/images/logo-hover.svg");
const originalImageSrc = ref("../assets/images/logo.svg");

const handleToggle = () => {
  toggle.value = !toggle.value;
  console.log(toggle.value);
};

const toggleHover = (val) => {
  isHovered.value = val;
};
</script>

<style scoped>
@import "../assets/css/main.css";

@layer components {
  .navigation__link {
    @apply text-[#c4c4c4] hover:border-b-2 hover:border-black hover:text-black;
  }

  .router-link-exact-active {
    @apply border-b-2 border-black text-black;
  }
}

.router-link-active.logo {
  border-bottom-width: 0;
}

.logo {
}
</style>
