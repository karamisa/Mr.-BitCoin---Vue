<template>
  <div class="container mx-auto h-96">
    <LineChart v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import lineChart  from "../cmps/line-chart.vue";


export default {
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async created() {
    this.loaded = false;
    try {
      const btcData = await bitcoinService.getMarketPriceHistory();
      this.chartData = btcData;
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  components: {
    LineChart: lineChart,

  }

};
</script>
