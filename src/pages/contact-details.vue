<template>
  <div class="container mx-auto space-y-3 py-8">
    <RouterLink class="text-end" to="/contact">
      <BackBtn />
    </RouterLink>
  </div>

  <div class="container mx-auto flex w-full pt-12">
    <div class="flex w-full flex-col lg:flex-row">
      <div>
        <ContactProfileCard class="mx-auto" v-if="contact" :contact="contact" />
      </div>
      <div class="divider lg:divider-horizontal"></div>
      <div class="flex-1">
        <div class="flex w-full flex-col">
          <div class="place-items-center bg-base-300">
            <TransferFunds
              v-if="contact"
              :contact="contact"
              @transfer="onTransferFunds"
            />
          </div>
          <div class="divider"></div>
          <div>
            <h2 class="text-center text-2xl font-semibold">Transactions</h2>
            <TransactionList
              v-if="contact && transactions"
              :transactions="filteredTransactions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service";
import contactProfileCard from "../cmps/contact-profile-card.vue";
import backBtn from "../cmps/ui/back-btn.vue";
import TransferFunds from "../cmps/transfer-funds.vue";
import TransactionList from "../cmps/transaction-list.vue";
import { userService } from "../services/user.service";
import { eventBus, showErrorMsg } from "../services/event-bus.service";

export default {
  data() {
    return {
      contact: null,
      transactions: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getById(contactId);
    this.transactions = await userService.getTransactions();
    eventBus.on("user-update", async () => {
      this.transactions = await userService.getTransactions();
    });
  },
  methods: {
    async onTransferFunds(amount) {
      try {
        userService.transferFunds(this.contact, amount);
        this.contact = await contactService.getById(this.contact._id);
        eventBus.emit("user-update");
      } catch (err) {
        showErrorMsg("Not Enough Funds");
        console.log(err);
      }
    },
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(
        (transaction) => transaction.toId === this.$route.params._id
      );
    },
  },
  components: {
    ContactProfileCard: contactProfileCard,
    BackBtn: backBtn,
    TransferFunds,
    TransactionList,
  },
};
</script>
