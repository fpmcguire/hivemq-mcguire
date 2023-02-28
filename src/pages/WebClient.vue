<template>
  <div>
    <div class="px-6">
      <div class="font-bold text-xl mb-2">MQTT Web Client</div>
    </div>
    <div class="flex flex-row flex-wrap p-4">
      <div class="flex flex-row flex-wrap">
        <div class="w-96">
          <connection-card />
        </div>
        <div class="w-96">
          <subscriptions-card />
        </div>
      </div>
      <div class="w-96">
        <messages-card />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
