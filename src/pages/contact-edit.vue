<template>
  <!-- CONTACT EDIT -->
  <!-- CMPS: RouterLink / BackBtn / ContactForm -->
  <section v-if="contactToEdit" class="bg-gray-800 p-6 text-gray-50">
    <RouterLink class="text-end" to="/contact">
      <BackBtn />
    </RouterLink>
    <h1 class="my-4 text-center text-3xl font-bold">{{ getHeader }}</h1>
    <ContactForm :contactToEdit="contactToEdit" @saveContact="saveContact" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
import contactForm from "../cmps/contact-form.vue";
import backBtn from "../cmps/ui/back-btn.vue";

export default {
  name: "ContactEdit",
  data() {
    return {
      contactToEdit: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      await this.loadContact(contactId);
    } else {
      this.contactToEdit = contactService.getEmptyContact();
    }
  },
  methods: {
    async loadContact(contactId) {
      this.contactToEdit = await contactService.getById(contactId);
    },
    async saveContact() {
      try {
        await this.$store.dispatch({
          type: "saveContact",
          contact: this.contactToEdit,
        });
        showSuccessMsg("Contact saved");
        this.$router.push("/contact");
      } catch (err) {
        showErrorMsg("Cannot save contact");
      }
    },
  },
  computed: {
    getHeader() {
      return this.contactToEdit._id ? "Edit Contact" : "Add Contact";
    },
  },
  components: {
    ContactForm: contactForm,
    BackBtn: backBtn,
  },
};
</script>
