<template>
  <div>
    <div class="rounded-md">
      <div class="mb-3">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="w-full relative h-10 border-solid border border-gray-200 rounded-full pl-5"
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="w-full relative h-10 border-solid border border-gray-200 rounded-full pl-5"
          placeholder="Password"
        />
      </div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <button
        type="submit"
        class="rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
        </span>
        LOG IN
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
