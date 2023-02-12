<template>
  <div class="flex items-center space-x-4 dark:bg-gray-800 dark:text-gray-100">
    <img
      class="h-10 w-10 rounded-full"
      :src="contact.imgUrl"
      alt="contact avatar"
    />
    <div class="font-medium dark:text-white">
      <div>{{ contact.name }}</div>
      <div class="text-sm text-gray-500 dark:text-gray-400">
        {{ contact.email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactPreview",
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>
