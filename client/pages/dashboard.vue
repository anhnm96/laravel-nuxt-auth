<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:auth'],
  title: 'Dashboard',
})
</script>

<template>
  <div>
    Dashboard
  </div>
</template>
