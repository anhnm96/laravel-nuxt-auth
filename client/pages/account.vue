<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:auth'],
})

const { updateProfile } = useAuth()
const { refreshIdentity } = useSanctumAuth()
const user = useSanctumUser<User>()

const form = reactive<ProfileForm>({
  name: user.value!.name,
  email: user.value!.email,
})

async function submit() {
  await updateProfile(form)
  await refreshIdentity()
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name</label>
      <div>
        <input id="name" v-model="form.name" type="text" name="name">
      </div>
    </div>
    <div>
      <label for="email">Email address</label>
      <div>
        <input id="email" v-model="form.email" type="email" name="email">
      </div>
    </div>
    <button>Update</button>
  </form>
</template>
