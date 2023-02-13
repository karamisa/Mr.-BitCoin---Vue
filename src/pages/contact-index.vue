<template>
  <!-- CONTACT INDEX -->
  <!-- CMPS: ContactFilter / ContactList / AddBtn -->
  <div class="container mx-auto">
    <!-- Filter + AddBtn -->
    <div class="flex justify-between py-4">
      <ContactFilter @filter="onSetFilterBy" />
      <RouterLink :to="`/contact/edit`"><AddBtn /></RouterLink>
    </div>
    <!-- Contact List -->
    <ContactList
      v-if="contacts"
      :contacts="filteredContacts"
      @remove="removeContact"
    />
  </div>
</template>

<script>
import ContactFilter from "@/cmps/contact-filter.vue";
import ContactList from "@/cmps/contact-list.vue";
import addBtn from "@/cmps/ui/add-btn.vue";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";

export default {
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
    },
  },
  data() {
    return {
      filterBy: {},
    };
  },
  created() {
    this.$store.dispatch("loadContacts");
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: "removeContact", contactId });
        showSuccessMsg("Contact removed");
      } catch (err) {
        showErrorMsg("Cannot remove contact");
      }
    },
  },
  components: {
    ContactFilter,
    ContactList,
    AddBtn: addBtn,
  },
};
</script>
