<template>
  <ul role="list" class="space-y-3">
    <li
      v-for="transaction in transactions"
      :key="transaction.at"
      class="flex justify-between overflow-hidden bg-white px-4 py-4 text-gray-900 shadow sm:rounded-md sm:px-6"
    >
      <div class="font-bold">
        <span class="font-normal">To: {{ transaction.to }}</span>
        <span class="ml-20 font-normal">{{
          new Date(transaction.at).toLocaleString()
        }}</span>
      </div>
      <div class="font-bold">${{ transaction.amount }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
};
</script>
