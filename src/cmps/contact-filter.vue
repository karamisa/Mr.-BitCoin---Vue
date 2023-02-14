<template>
  <fieldset class="space-y-1 text-gray-100">
    <label for="Search" class="hidden">Search</label>
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="button"
          title="search"
          class="p-1 focus:outline-none focus:ring"
        >
        <SearchIcon class="h-4 w-4 text-gray-100" />
        </button>
      </span>
      <input
        type="text"
        name="Search"
        v-model="filterBy.txt"
        @input="onFilter"
        placeholder="Filter contacts..."
        class="w-32 rounded-md py-2 pl-10 text-sm focus:outline-none bg-gray-800 text-gray-100 focus:border-primary focus:bg-gray-900 sm:w-auto"
      />
    </div>
  </fieldset>
</template>
<script>
import SearchIcon from "@/cmps/icons/search-icon.vue";
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  emits: ["filter"],
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
  components: {
    SearchIcon,
  },
};
</script>
