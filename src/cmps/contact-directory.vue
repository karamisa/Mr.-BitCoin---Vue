<template>
  <nav class="h-full overflow-y-auto border">
    <div v-for="letter in letters" :key="letter">
      <div
        class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 text-gray-500 px-6 py-1 text-sm font-medium"
      >
        <h3>{{ letter }}</h3>
      </div>
      <ul role="list" class="relative z-0 divide-y bg-white divide-gray-200">
        <slot
          name="contact"
          v-for="contact in filteredContacts(letter)"
          :contact="contact"
          :key="contact.id"
        ></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    letters() {
      return this.contacts
        .map((contact) => contact.name[0].toUpperCase())
        .filter((letter, index, arr) => arr.indexOf(letter) === index)
        .sort();
    },
  },
  methods: {
    filteredContacts(letter) {
      return this.contacts
        .filter((contact) => contact.name[0].toUpperCase() === letter)
        .filter((contact) =>
          contact.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  components: {
    ContactPreview,
  },
};
</script>
