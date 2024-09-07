<script lang="ts" setup>
const { isAuthenticated, logout } = useSanctumAuth()
const user = useSanctumUser<User>()

async function handleLogout() {
  await logout()
  await navigateTo('/')
}
</script>

<template>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center space-x-6">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/dashboard">
        Dashboard
      </NuxtLink>
    </div>
    <div v-if="!isAuthenticated" class="flex items-center space-x-6">
      <NuxtLink to="/auth/login">
        Sign in
      </NuxtLink>
      <NuxtLink to="/auth/register">
        Create an account
      </NuxtLink>
    </div>
    <div v-else class="flex items-center space-x-6">
      <div class="font-semibold">
        {{ user?.name }}
      </div>
      <NuxtLink to="/account">
        Account
      </NuxtLink>
      <button @click="handleLogout">
        Sign out
      </button>
    </div>
  </div>
</template>
