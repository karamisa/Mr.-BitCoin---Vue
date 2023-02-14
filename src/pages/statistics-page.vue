<template>
  <div v-if="loaded" class="container mx-auto">
    <StatsSummary :summaryData="summaryData" />
    <div class="h-96">
      <LineChart :data="chartData" />
    </div>
  </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import lineChart  from "../cmps/line-chart.vue";
import statsSummary from "../cmps/stats-summary.vue";


export default {
  data: () => ({
    loaded: false,
    chartData: null,
    summaryData: null,
  }),
  async created() {
    this.loaded = false;
    try {
      const btcData = await bitcoinService.getMarketPriceHistory();
      const btcSummary = await bitcoinService.getMarketStats();
      this.summaryData = btcSummary;
      console.log(this.summaryData)
      this.chartData = btcData;
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  components: {
    LineChart: lineChart,
    StatsSummary: statsSummary,

  }

};
</script>
