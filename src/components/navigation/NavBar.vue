<template>
  <nav class="navbar mb-2 shadow-lg bg-black text-neutral-content">
    <div class="flex-1 px-2 mx-2 justify-end">
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/webclient">
        MQTT Web Client
      </router-link>
      <router-link class="btn btn-ghost btn-sm rounded-btn" to="/task">
        <icons-hive-logo />
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
