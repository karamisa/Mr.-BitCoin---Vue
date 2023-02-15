<template>
  <div
    v-if="alive"
    class="absolute top-0 right-0 mr-10 mt-10 flex max-w-2xl gap-6 divide-x divide-gray-700 overflow-hidden rounded-lg bg-gray-900 text-gray-100 shadow-md"
    :class="alertClass"
  >
    <div class="flex flex-1 flex-col border-l-8 border-amber-400 p-4">
      <span class="text-2xl">{{ msg.type || "" }}</span>
      <span class="dark:text-gray-400 text-xs">{{ msg.txt }}</span>
    </div>
    <button
      class="flex items-center border-gray-700 px-4 text-xs uppercase tracking-wide text-gray-400"
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
