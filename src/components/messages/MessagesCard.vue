<template>
  <div class="rounded overflow-hidden shadow-lg">
    <div class="px-4 py-4">
      <div class="font-bold text-xl mb-2">Messages</div>
    </div>
    <form class="ml-4 mr-4 mb-4" action="">
      <div class="mb-4">
        <input
          id="topic"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Topic"
        />
      </div>
      <div class="mb-4">
        <select
          class="select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="-" disabled selected>Quality of Service (QoS)</option>
          <option value="0">0 - At most once</option>
          <option value="1">1 - At least once</option>
          <option value="2">2 - Exactly once</option>
        </select>
      </div>
      <div class="mb-4">
        <textarea
          id="message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Message body"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Publish Message
        </button>
      </div>
    </form>
    <div class="ml-4 mr-4 mb-4">
      <messages-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessagesList from "./MessagesList.vue";
</script>

<style scoped></style>
