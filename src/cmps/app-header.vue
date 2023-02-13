<template>
  <!-- App Header -->
  <header class="bg-gray-800 p-4 text-gray-100">
    <div class="container mx-auto flex h-16 justify-between">
      <RouterLink to="/" class="flex items-center p-2 gap-2">
        <Logo />
        BTC Wallet
      </RouterLink>
      <AppNav />
    </div>
  </header>

  <!-- Header Bottom Line -->
  <div class="bg-amber-400 px-4 text-gray-800">
    <div class="container mx-auto">
      <BreadcrumbLoader v-if="loadingUser || loadingExchangeRate" />
      <div v-else class="flex justify-end gap-4">
        <p class="font-bold dark:text-gray-800">BTC/USD: {{ exchangeRate }}</p>
        <span>|</span>
        <p class="font-bold dark:text-gray-800">Balance: {{ user.balance }}</p>
        <span>|</span>
        <p class="mr-2">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
import breadcrumbLoader from "./ui/breadcrumb-loader.vue";
import logo from "./ui/logo.vue";
import appNav from "./app-nav.vue";

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
  components: {
    BreadcrumbLoader: breadcrumbLoader,
    Logo: logo,
    AppNav: appNav,
  },
};
</script>
