<template>
  <div class="container mx-auto">
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      v-if="contacts"
      :contacts="filteredContacts"
      @remove="removeContact"
    />
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactFilter from "@/cmps/contact-filter.vue";
import ContactList from "@/cmps/contact-list.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  async created() {
    this.contacts = await contactService.query();
    console.log("contacts", this.contacts);
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(id) {
      await contactService.remove(id);
      this.contacts = this.contacts.filter((contact) => contact._id !== id);
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactFilter,
    ContactList,
  },
};
</script>
