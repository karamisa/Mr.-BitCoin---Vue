<template>
  <div class="container mx-auto flex w-full pt-12">
    <div class="flex w-full flex-col lg:flex-row-reverse">
        <UserStatCard
          class="lg:w-2/5 h-min"
          :balance="balance"
          :rate="rate"
          :updateBalance="updateBalance"
        />
      <div class="divider lg:divider-horizontal"></div>

      <div class="flex-1">
        <div class="flex w-full flex-col">
          <div class="place-items-center bg-base-300">
            <div
              class="card rounded-box grid h-32 flex-grow place-items-center bg-base-300 p-4"
            >
              <h1 class="text-4xl font-bold">Hi {{ name }}!</h1>
              <p class="text-md mb-8">
                Welcome to your Bitcoin Wallet. You can see an overview of your
                account here
              </p>
            </div>
          </div>
          <div class="divider"></div>
          <div>
            <h2 class="text-center text-2xl font-semibold mb-4">Latest Transactions</h2>
            <TransactionList
              v-if="transactions"
              :transactions="filteredTransactions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
import UserStatCard from "../cmps/user-stat-card.vue";
import { eventBus } from "../services/event-bus.service";
import TransactionList from "../cmps/transaction-list.vue";

export default {
  data() {
    return {
      name: "",
      balance: "",
      rate: "",
      transactions: null,
      userId: "",
    };
  },
  async created() {
    const user = await userService.getUser();
    const rate = await bitcoinService.getRate();
    this.name = user.name;
    this.transactions = user.transactions;
    this.userId = user._id;
    this.balance = user.balance;
    this.rate = rate;
  },
  methods: {
    async updateBalance() {
      const amount = prompt("How much would you like to add?");
      this.balance = userService.updateBalance(amount);
      eventBus.emit("user-update");
    },
  },
  computed: {
    filteredTransactions() {
      return this.transactions.splice(0, 3);
    },
  },
  components: {
    UserStatCard,
    TransactionList,
  },
};
</script>
