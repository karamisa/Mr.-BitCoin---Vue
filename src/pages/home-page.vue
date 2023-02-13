<template>
  <div class="container mx-auto text-center pt-12 text-gray-800">
    <h1 class="text-4xl font-bold">Hi {{ name }}!</h1>
    <p class="text-md">
      Welcome to your Bitcoin Wallet. You can see an overview of your account
      here
    </p>
  </div>
  <div class="container mx-auto pt-12 px-36 flex justify-center gap-5">
    <StatCard class="shadow-lg" :balance="balance" title="Balance" />
    <StatCard class="shadow-lg" :balance="rate" title="BTC Exhange Rate" />
  </div>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
import statCard from "@/cmps/stat-card.vue";

export default {
  data() {
    return {
      name: "",
      balance: "",
      rate: "",
    };
  },
  async created() {
    const user = await userService.getUser();
    const rate = await bitcoinService.getRate();
    this.name = user.name;
    this.balance = user.balance;
    this.rate = rate;
  },
  components: {
    StatCard: statCard,
  },
};
</script>
