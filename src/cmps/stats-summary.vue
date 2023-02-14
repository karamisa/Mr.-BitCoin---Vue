<template>
<section v-if="summaryData" class="px-4 py-12 mx-auto max-w-7xl">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <StatCard v-for="stat in summaryData" :key="stat.title" :stat="stat" class="bg-primary text-gray-800"/>
  </div>
</section>
</template>

<script>
import StatCard from './stat-card.vue';
export default {
  components:{StatCard },
    props: {
        summaryData: {
            type: Array,
            length: 4,
            required: true
        }
    },
    mounted() {
        console.log('summaryData', this.summaryData);
    }
};
</script>