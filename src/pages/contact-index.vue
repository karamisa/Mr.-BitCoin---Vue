<template>
    <div class="container mx-auto">
      <!-- Contact Filter + Add -->
      <div class="flex justify-between py-4">
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink
          is="button"
          :to="`/contact/edit`"
          class="btn-outline btn-info btn"
          >Add +
        </RouterLink>
      </div>

      <!-- Contact Directory -->
      <div class="h-[70vh] overflow-auto shadow sm:rounded-lg">
      <ContactDirectory v-if="contacts" :contacts="filteredContacts">
        <template v-slot:contact="{ contact }">
          <div class="flex items-center">
            <RouterLink
              :to="`/contact/${contact._id}`"
              class="relative flex flex-1 items-center space-x-3 px-6 py-5 hover:bg-gray-50"
            >
              <ContactPreview :contact="contact" />
            </RouterLink>
            <RouterLink
              :to="`/contact/edit/${contact._id}`"
              class="link-primary link"
            >
              <EditIcon />
            </RouterLink>
            <button
              class="btn-outline btn-error btn-circle btn mx-6"
              @click.stop="removeContact(contact._id)"
            >
              <Xicon />
            </button>
          </div>
        </template>
      </ContactDirectory>
    </div>
  </div>
</template>

<script>
import ContactFilter from "@/cmps/contact-filter.vue";
import ContactDirectory from "@/cmps/contact-directory.vue";
import ContactPreview from "@/cmps/contact-preview.vue";
import Xicon from "@/cmps/icons/x-icon.vue";
import EditIcon from "@/cmps/icons/edit-icon.vue";
import AddIcon from "@/cmps/icons/add-icon.vue";
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
      console.log("filterBy", filterBy);
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
    ContactDirectory,
    ContactPreview,
    AddIcon,
    Xicon,
    EditIcon,
  },
};
</script>
