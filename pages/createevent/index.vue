<template>
  <div>
    <HeaderComponent />
    <form name="contact" action="" method="post">
      <div class="grid grid-cols-2 max-w-xl mx-auto p-12">
        <div class="col-span-2 p-2">
          <label class="form-label" for="name"> Event name </label>
          <input
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full"
            name="name"
            id="name"
            v-model="form.eventName"
          />
        </div>
        <div class="p-2 col-span-2 sm:col-span-1">
          <label class="form-label" for="startDate"> Start Date </label>
          <input
            v-mask="'##/##/####'"
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full"
            name="startDate"
            id="startDate"
            v-model="form.startDate"
          />
        </div>
        <div class="p-2 col-span-2 sm:col-span-1">
          <label class="form-label" for="endDate"> End Date </label>
          <input
            v-mask="'##/##/####'"
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full"
            name="email"
            id="endDate"
            v-model="form.endDate"
          />
        </div>
        <div class="col-span-2 p-2">
          <label class="form-label" for="description">
            Event Description
          </label>

          <textarea
            class="w-full relative h-20 border-solid border border-gray-200 rounded-lg"
            name="Event description"
            id="description"
            v-model="form.description"
          ></textarea>
        </div>
        <div class="p-2">
          <input
            type="file"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="upload image button"
            @change="selectFile"
          />
        </div>
      </div>
    </form>
    <div class="col-span-2">
      <button
        @click="this.submitForm"
        class="rounded-full group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        SUBMIT
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
        eventImage: "",
      },
    };
  },
  methods: {
    async selectFile(e) {
      const file = e.target.files[0];
      debugger;

      /* Make sure file exists */
      if (!file) return;

      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
        });

      /* Read data */
      const data = await readData(file);
      console.log(data);
      return data;
    },
    submitForm() {
      console.log(this.form);
      console.log("submitForm");
    },
  },
};
</script>
<style></style>
