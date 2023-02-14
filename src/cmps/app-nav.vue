<template>
  <nav class="flex items-stretch space-x-3">
    <RouterLink
      to="/home"
      class="-mb-1 flex items-center border-b-2 px-4 border-transparent"
      >Home</RouterLink
    >
    <RouterLink
      to="/contact"
      class="-mb-1 flex items-center border-b-2 px-4 border-transparent"
      >Contacts</RouterLink
    >
    <RouterLink
      to="/stats"
      class="-mb-1 flex items-center border-b-2 px-4 border-transparent"
      >Stats</RouterLink
    >
  </nav>
</template>

<script>
export default {
  name: "appNav",
};
</script>

<style scoped>
nav a.router-link-exact-active {
  @apply border-primary text-primary;
}
</style>
