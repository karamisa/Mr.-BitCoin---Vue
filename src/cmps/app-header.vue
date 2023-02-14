<template>
  <!-- App Header -->
  <header class="pb-2">
    <div class="container mx-auto flex h-16 justify-between">
      <RouterLink to="/home" class="flex items-center gap-2 p-2">
        <Logo />
        BTC Wallet
      </RouterLink>
      <AppNav />
    </div>
  </header>

  <!-- Header Bottom Line -->
  <div class="bg-primary text-secondary">
    <BreadcrumbLoader v-if="loadingUser || loadingExchangeRate" />
    <div v-else class="container mx-auto flex justify-end gap-4">
      <p class="font-bold">BTC/USD: {{ exchangeRate }}</p>
      <span>|</span>
      <p class="font-bold">Balance: ${{ user.balance }}</p>
      <span>|</span>
      <p class="mr-2">{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
import breadcrumbLoader from "./ui/breadcrumb-loader.vue";
import logo from "./ui/logo.vue";
import appNav from "./app-nav.vue";
import { eventBus } from "../services/event-bus.service";

export default {
  data() {
    return {
      loadingUser: false,
      loadingExchangeRate: false,
      user: {},
      exchangeRate: 0,
    };
  },
  async mounted() {
    this.loadingUser = true;
    this.loadingExchangeRate = true;
    this.user = await userService.getUser();
    this.loadingUser = false;
    this.exchangeRate = await bitcoinService.getRate();
    this.loadingExchangeRate = false;
  },
  created() {
    eventBus.on("user-update", async () => {
      this.user = await userService.getUser();
    });
  },
  components: {
    BreadcrumbLoader: breadcrumbLoader,
    Logo: logo,
    AppNav: appNav,
  },
};
</script>
