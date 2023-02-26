<template>
  <div class="container">
    <nav-bar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/navigation/NavBar.vue";
</script>
