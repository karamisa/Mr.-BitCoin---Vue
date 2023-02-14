<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">{{ stat.title }}</div>
      <div class="stat-value">{{stat.value}}</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stat"],
};
</script>

