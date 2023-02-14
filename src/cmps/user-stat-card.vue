<template>
  <div class="stats bg-primary text-primary-content">
  
  <div class="stat">
    <div class="stat-title">Account balance</div>
    <div class="stat-value">${{ balance }}</div>
    <div class="stat-actions">
        <button class="btn btn-sm btn-success" @click="updateBalance">Add funds</button>
    </div>
  </div>

  
  <div class="stat">
    <div class="stat-title">BTC Exchange Rate</div>
    <div class="stat-value">${{ rate }}</div>
    <div class="stat-value">USD/BTC</div>
  </div>
  
</div>
</template>

<script>
export default {
    props: ["balance", 'rate', 'updateBalance']
}
</script>

<style>

</style>