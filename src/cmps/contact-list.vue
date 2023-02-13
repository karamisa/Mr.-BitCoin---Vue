<template>
  <ul class="space-y-4 lg:columns-2 xl:columns-3">
    <li
      v-for="contact in contacts"
      :key="contact._id"
      class="flex break-inside-avoid-column justify-between bg-gray-800 p-3 text-gray-100"
    >
      <!-- Contact Preview -->
      <ContactPreview :contact="contact"></ContactPreview>

      <!-- Menu Items: Detaills/Edit/Delete -->
      <div class="flex items-center gap-4">
        <RouterLink :to="`/contact/${contact._id}`">Details</RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
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
