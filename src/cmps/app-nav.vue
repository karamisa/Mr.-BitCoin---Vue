<template>
  <nav class="flex items-stretch space-x-3">
    <RouterLink
      v-for="route in routes"
      :to="route.path"
      class="-mb-1 flex items-center border-b-2 border-transparent px-4"
      >{{ route.name }}</RouterLink
    >
  </nav>
</template>

<script>
const routes = [
  { path: "/home", name: "Home" },
  { path: "/contact", name: "Contact" },
  { path: "/stats", name: "Stats" },
];

export default {
  name: "appNav",
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped>
nav a.router-link-exact-active {
  @apply border-primary text-primary;
}
</style>
