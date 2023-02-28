<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-4 py-4">
      <div class="font-bold text-xl mb-2">Subscriptions</div>
    </div>
    <form class="ml-4 mr-4 mb-4" action="">
      <div class="mb-4">
        <input
          id="subscription"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="topic/subscription/abc"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
    <div class="ml-4 mr-4 mb-4">
      <subscriptions-list class="mb-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SubscriptionsList from "./SubscriptionsList.vue";
</script>

<style scoped></style>
