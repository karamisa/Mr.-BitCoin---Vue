<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Transfer Funds to {{ contact.name }}
      </h3>
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <p>Enter the amount you would like to transfer to the user.</p>
      </div>
      <form @submit.prevent="transfer" class="mt-5 sm:flex sm:items-center">
        <div>
          <label for="amount" class="block text-sm font-medium text-gray-700"
            >Amount</label
          >
          <div class="relative mt-1 rounded-md shadow-sm">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <span class="text-gray-500 sm:text-sm"> $ </span>
            </div>
            <input
              type="text"
              name="amount"
              id="amount"
              required
              v-model="amount"
              class="block w-full rounded-md border-gray-300 pl-7 pr-12 text-gray-900 sm:text-sm"
              placeholder="0.00"
              aria-describedby="price-currency"
            />
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <span class="text-gray-500 sm:text-sm" id="price-currency">
                USD
              </span>
            </div>
          </div>
        </div>
        <button type="submit" class="btn-primary btn mx-4 mt-6">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contact"],
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    transfer() {
      this.$emit("transfer", this.amount);
      this.amount = "";
    },
  },
};
</script>

<style></style>
