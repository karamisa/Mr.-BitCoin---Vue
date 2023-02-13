<template>
<section v-if="summaryData" class="px-4 py-12 mx-auto max-w-7xl">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{{ summaryData[0].title }}</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{{ summaryData[0].value }}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-amber-400 card-footer hover:text-black">See more</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{{ summaryData[1].title }}</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{{ summaryData[1].value }}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-amber-400 card-footer hover:text-black">See more</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{{ summaryData[2].title }}</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{{ summaryData[2].value }}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-amber-400 card-footer hover:text-black">See more</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">{{ summaryData[3].title }}</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">{{ summaryData[3].value }}</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-amber-400 card-footer hover:text-black">See more</a>
    </div>
  </div>
</section>
</template>

<script>
export default {
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