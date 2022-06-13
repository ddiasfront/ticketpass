<template>
  <header>
    <nav v-if="isMobileOpened" class="fixed w-screen h-screen z-10">
        <ul>
            <li>
                CREATE EVENT
            </li>
            <li>
                LOGIN
            </li>
        </ul>
    </nav>
    <nav class="flex justify-between p-5">
      <div class="flex">
        <img class="h-12" src="~/static/ticketpass_logo.svg" />
      </div>
      <div class="flex sm:hidden" @click="toogleMobileOpened()">
        <svg
          v-if="!isMobileOpened"
          class="h-6 w-6"
          x-description="Heroicon name: outline/menu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <div class="hidden sm:flex">
        <div>
          <button
            @click=""
            class="rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            CREATE EVENT
          </button>
        </div>
        <div>
          <button
            @click=""
            class="rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            LOGIN
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileOpened" class="z-20">
        <div @click="toogleMobileOpened()">
          <svg
            class="h-6 w-6"
            x-description="Heroicon name: outline/x"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMobileOpened: false,
    };
  },
  methods: {
    toogleMobileOpened() {
      this.isMobileOpened = !this.isMobileOpened;
    },
  },
};
</script>
<style></style>
