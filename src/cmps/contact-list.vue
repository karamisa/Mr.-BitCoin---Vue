<template>
  <ul class="space-y-4 lg:columns-2 xl:columns-3">
    <li v-for="contact in contacts" :key="contact._id" class="flex break-inside-avoid-column justify-between p-3 bg-gray-800 text-gray-100">
      <ContactPreview :contact="contact"></ContactPreview>
      <div class="flex gap-4 items-center">
        <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        <button
          @click="onRemoveContact(contact._id)"
          class="bg-red-500 p-2 text-white"
        >
          Delete
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import contactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(id) {
      this.$emit("remove", id);
    },
  },
  emits: ["remove"],
  components: {
    ContactPreview: contactPreview,
  },
};
</script>
