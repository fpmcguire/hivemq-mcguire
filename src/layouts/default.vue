<template>
  <div class="container p-2">
    <nav-bar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/navigation/NavBar.vue";
</script>
