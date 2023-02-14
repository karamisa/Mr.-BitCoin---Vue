<template>
  <form
    @submit.prevent="onSaveContact"
    class="ng-untouched ng-pristine ng-valid container mx-auto flex flex-col space-y-12"
  >
    <fieldset
      class="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm dark:bg-gray-900"
    >
      <div class="col-span-full space-y-2 lg:col-span-1">
        <p class="font-medium">Personal Information</p>
      </div>
      <div class="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
        <div class="col-span-full sm:col-span-3">
          <label for="name" class="text-sm">Name</label>
          <input
            id="name"
            type="text"
            v-model="contactToEdit.name"
            placeholder="Name"
            class="w-full rounded-md focus:ring focus:ring-amber-400 focus:ring-opacity-75 border-gray-700 text-gray-900"
          />
        </div>
        <div class="col-span-full sm:col-span-3">
          <label for="email" class="text-sm">Email</label>
          <input
            id="email"
            type="email"
            v-model="contactToEdit.email"
            placeholder="Email"
            class="w-full rounded-md focus:ring focus:ring-amber-400 focus:ring-opacity-75 border-gray-700 text-gray-900"
          />
        </div>
        <div class="col-span-full sm:col-span-3">
          <label for="phone" class="text-sm">Phone</label>
          <input
            id="phone"
            type="text"
            v-model="contactToEdit.phone"
            placeholder="Phone"
            class="w-full rounded-md focus:ring focus:ring-amber-400 focus:ring-opacity-75 border-gray-700 text-gray-900"
          />
        </div>
        <div class="col-span-full sm:col-span-3">
          <label for="imgUrl" class="text-sm">ImgUrl</label>
          <input
            id="imgUrl"
            type="text"
            v-model="contactToEdit.imgUrl"
            placeholder="imgUrl"
            class="w-full rounded-md focus:ring focus:ring-amber-400 focus:ring-opacity-75 border-gray-700 text-gray-900"
          />
        </div>
      </div>
    </fieldset>
    <div class="flex justify-end">
      <button
        type="submit"
        class="inline-flex items-center rounded-lg bg-amber-400 px-5 py-2.5 text-center text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-amber-400 hover:ring-1 hover:ring-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "contactForm",
  props: {
    contactToEdit: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSaveContact() {
      console.log("onSaveContact");
      this.$emit("saveContact", this.contactToEdit);
    },
  },
};
</script>
