<template>
  <div class="container mx-auto py-8 space-y-3">
    <RouterLink class="text-end" to="/contact">
      <BackBtn/>
    </RouterLink>
    <ContactProfileCard class="mx-auto" v-if="contact" :contact="contact" />
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service";
import contactProfileCard from "../cmps/contact-profile-card.vue";
import backBtn from "../cmps/ui/back-btn.vue";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
  },
  components: {
    ContactProfileCard: contactProfileCard,
    BackBtn: backBtn,
  },
};
</script>
