<template>
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" :src="contact.imgUrl" alt="" />
    </div>
    <div class="min-w-0 flex-1">
        <span class="absolute inset-0" aria-hidden="true" />
        <p class="text-sm font-medium text-gray-900">
          {{ contact.name }}
        </p>
        <p class="truncate text-sm text-gray-500">
          {{ contact.phone }}
        </p>
    </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>
