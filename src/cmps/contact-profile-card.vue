<template>
  <div
    class="max-w-md p-8 bg-primary text-gray-800 sm:flex sm:space-x-6 rounded-lg"
  >
    <div class="mb-6 h-44 w-full flex-shrink-0 sm:mb-0 sm:h-32 sm:w-32">
      <img
        :src="contact.imgUrl"
        alt=""
        class="h-full w-full rounded object-cover object-center bg-gray-800"
      />
    </div>
    <div class="flex flex-col space-y-4">
      <div>
        <h2 class="text-2xl font-semibold">{{ contact.name }}</h2>
        <span class="text-sm text-gray-400">Contact</span>
      </div>
      <div class="space-y-1">
        <span class="flex items-center space-x-2">
          <MailIcon class="h-4 w-4" />
          <span class="text-gray-400">{{ contact.email }}</span>
        </span>
        <span class="flex items-center space-x-2">
          <PhoneIcon class="h-4 w-4" />
          <span class="text-gray-400">{{ contact.phone }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "@/cmps/icons/phone-icon.vue";
import MailIcon from "@/cmps/icons/mail-icon.vue";
export default {
  name: "contactProfileCard",
  props: ["contact"],
  components: {
    PhoneIcon,
    MailIcon,
  },
};
</script>
