<template>
  <header>
    <!-- MOBILE MENU -->
    <nav v-if="isMobileOpened" class="fixed w-screen h-screen z-10 bg-white pt-24">
      <div class="grid grid-cols-1 divide-y divide-grey-300">
        <div class="text-center p-4" v-if="this.$store.state.login.access_token">CREATE EVENT</div>
        <div class="text-center p-4">{{this.$store.state.login.access_token ? 'LOG OUT' : 'LOG IN'}}</div>
      </div>
    </nav>
    <nav class="flex justify-between p-5 border-b border-grey-300">
      <div class="flex">
        <img class="h-12" src="~/static/ticketpass_logo.svg" />
      </div>
      <div class="flex sm:hidden" @click="toogleMobileOpened()">
        <svg
          v-if="!isMobileOpened"
          class="h-6 w-6"
          x-description=""
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

      <!-- DESKTOP/PAD MENU -->
      {{this.$store.state.login.access_token}}
      <div class="hidden sm:flex items-center">
        <div class="w-40 mr-2" v-if="this.$store.state.login.access_token">
          <button
            @click=""
            class="rounded-full group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
          > 
            CREATE EVENT
          </button>
        </div>
        <div class="w-40">
            <NuxtLink to="/login">
                <button
                    @click=""
                    class="rounded-full group relative w-full flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md bg-white hover:bg-grey-500 text-black border border-black"
                >
                    {{this.$store.state.login.access_token ? 'LOG OUT' : 'LOG IN'}}
                </button>
          </NuxtLink>
        </div>
      </div>
      <!-- MOBILE ICON -->
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
      isLoggedIn: false,
    };
  },
  mounted() {
    if (localStorage.isLoggedIn) {
      this.isLoggedIn = localStorage.isLoggedIn;
    }
  },
  methods: {
    toogleMobileOpened() {
      this.isMobileOpened = !this.isMobileOpened;
    },
  },
};
</script>
<style></style>
