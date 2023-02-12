<template>
    <div class="text-center py-10">
      <h1 class="text-2xl font-bold">Welcome {{ name }}!</h1>
      <p class="text-xl">Your balance is: {{ balance }}</p>
      <p class="text-xl">The current Bitcoin rate is: <span class="text-red-800">{{ rate }}</span></p>
    </div>
  </template>
  
  <script>
import { userService } from "../services/user.service";
import { bitcoinService } from "../services/bitcoin.service";
  
  export default {
    data () {
      return {
        name: '',
        balance: '',
        rate: ''
      }
    },
    async created () {
      const user = await userService.getUser()
      const rate = await bitcoinService.getRate()
      this.name = user.name
      this.balance = user.balance
      this.rate = rate
    }
  }
  </script>
  