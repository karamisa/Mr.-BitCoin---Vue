<template>
  <header class="p-4 bg-gray-800 text-gray-100">
    <div class="container mx-auto flex h-16 justify-between">
      <RouterLink to="/" class="flex items-center p-2">
        <Logo />
      </RouterLink>
        <AppNav />
    </div>
  </header>
  <div class='px-4 bg-amber-400 text-gray-800'>
  <div class="container mx-auto">
      <BreadcrumbLoader v-if="loadingUser || loadingExchangeRate" />
      <div v-else class="flex justify-between gap-4">
        <p class="mr-2">Welcome Back, {{ user.name }}</p>
        <p class="dark:text-gray-800 font-bold">BTC/USD: {{ exchangeRate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
import breadcrumbLoader from "./breadcrumb-loader.vue";
import logo from "./logo.vue";
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

