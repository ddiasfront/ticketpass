<template>
  <div>
    <HeaderComponent />
    <span>{{ dynamic }}</span>
    <FloatMessageComponent :success="true" v-if="!this.$store.state.createdEvent.errors && this.$store.state.createdEvent.data" message="Successfully sent"/>
    <form name="contact" action="" method="post">
      <div class="grid grid-cols-2 max-w-xl mx-auto p-12">
        <div class="col-span-2 p-2">
          <label class="form-label" for="name"> Event name </label>
          <input
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full p-2"
            name="name"
            id="name"
            v-model="form.eventName"
          />
          <ErrorMessageComponent
            v-if="this.$store.state.createdEvent.errors"
            :messages="this.$store.state.createdEvent.errors.name"
          />
        </div>
        <div class="p-2 col-span-2 sm:col-span-1">
          <label class="form-label" for="startDate"> Start Date </label>
          <input
            v-mask="'##/##/####'"
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full p-2"
            name="startDate"
            id="startDate"
            v-model="form.startDate"
          />
          <ErrorMessageComponent
            v-if="this.$store.state.createdEvent.errors"
            :messages="this.$store.state.createdEvent.errors.startDate"
          />
        </div>
        <div class="p-2 col-span-2 sm:col-span-1">
          <label class="form-label" for="endDate"> End Date </label>
          <input
            v-mask="'##/##/####'"
            class="w-full relative h-10 border-solid border border-gray-200 rounded-full p-2"
            name="email"
            id="endDate"
            v-model="form.endDate"
          />
          <ErrorMessageComponent
            v-if="this.$store.state.createdEvent.errors"
            :messages="this.$store.state.createdEvent.errors.endDate"
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
          <ErrorMessageComponent
            v-if="this.$store.state.createdEvent.errors"
            :messages="this.$store.state.createdEvent.errors.description"
          />
        </div>
        <div class="p-2">
          <input
            type="file"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="upload image button"
            @change="selectFile"
          />

          <ErrorMessageComponent
            v-if="this.$store.state.createdEvent.errors"
            :messages="this.$store.state.createdEvent.errors.image"
          />
        </div>
      </div>
    </form>
    <div class="grid grid-cols-2 max-w-xl mx-auto p-12">
      <button
        @click="submitForm()"
        class="rounded-full  col-span-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        SUBMIT
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import moment from "moment";
import FloatMessageComponent from "~/components/FloatMessageComponent.vue";
export default {
    data() {
        return {
            dynamic: "",
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
        ...mapActions(["createEvent"]),
        async selectFile(e) {
            this.form.eventImage = e.target.files[0];
        },
        submitForm() {
            const momentStart = moment(this.form.startDate).unix();
            const momentEnd = moment(this.form.endDate).unix();
            const createEventPayload = new FormData();
            createEventPayload.append("name", this.form.eventName);
            createEventPayload.append("description", this.form.description);
            createEventPayload.append("image", this.form.eventImage);
            createEventPayload.append("startDate", momentStart);
            createEventPayload.append("endDate", momentEnd);
            this.$store.dispatch("createEvent", createEventPayload);
        },
    },
    components: { FloatMessageComponent }
};
</script>
<style></style>
