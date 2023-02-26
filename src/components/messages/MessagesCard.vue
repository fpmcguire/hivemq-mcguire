<template>
  <div class="ml-10">
    <h1 class="text-lg">Messages</h1>
    <div>
      <messages-new-message />
    </div>
    <div>
      <messages-list />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessagesList from "./MessagesList.vue";
import MessagesNewMessage from "./MessagesNewMessage.vue";
</script>

<style scoped></style>
