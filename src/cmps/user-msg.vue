<template>
  <div
    v-if="alive"
    class=" mr-10 mt-10 absolute top-0 right-0 flex max-w-2xl gap-6 divide-x divide-gray-700 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100"
    :class="alertClass"
  >
    <div class="flex flex-1 flex-col border-l-8 p-4 border-amber-400">
      <span class="text-2xl">{{ msg.type || "" }}</span>
      <span class="text-xs dark:text-gray-400">{{ msg.txt }}</span>
    </div>
    <button
      class="flex items-center px-4 text-xs uppercase tracking-wide border-gray-700 text-gray-400"
        @click="alive = false"
    >
      Dismiss
    </button>
  </div>
</template>

<script>
import { eventBus } from "../services/event-bus.service.js";
export default {
  created() {
    eventBus.on("show-msg", (msg) => {
      this.msg = msg;
      var delay = msg.delay || 2000;
      this.alive = true;
      setTimeout(() => {
        this.alive = false;
      }, delay);
    });
  },
  data() {
    return {
      alive: false,
      msg: null,
    };
  },
  computed: {
    alertClass() {
      if (!this.msg) return;
      return `alert-${this.msg.type}`;
    },
  },
};
</script>
