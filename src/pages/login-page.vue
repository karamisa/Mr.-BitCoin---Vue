<template>
  <div class="pt-[20vh]">
    <div
      class="container mx-auto flex items-center overflow-hidden rounded-lg text-gray-900 bg-white shadow justify-center"
    >
      <!-- Content goes here -->
      <h1 class="text-center text-2xl font-bold ml-4">Login:</h1>
      <form @submit.prevent="login" class="m-4 sm:flex sm:items-center">
        <div class="w-full sm:max-w-xs">
          <label for="name" class="sr-only">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="login/signup name..."
          />
        </div>
        <button type="submit" class="btn-primary btn ml-4">Login/SignUp</button>
      </form>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/event-bus.service";
import { userService } from "../services/user.service";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    login() {
      userService.signup(this.name);
      eventBus.emit("user-update");
      this.$router.push("/home");
    },
  },
};
</script>
