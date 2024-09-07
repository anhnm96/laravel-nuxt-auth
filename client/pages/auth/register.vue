<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:guest'],
})

const { register } = useAuth()
const { refreshIdentity } = useSanctumAuth()

const form = reactive<RegisterForm>({
  name: '',
  email: '',
  password: '',
})

const errors = ref<ValidationErrors>({})

async function submit() {
  try {
    await register(form)
    await refreshIdentity()

    await navigateTo('/dashboard')
  } catch (e: any) {
    if (e.statusCode === 422) {
      errors.value = e.data.errors
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name</label>
      <div>
        <input id="name" v-model="form.name" type="text" name="name">
        <div v-if="errors.name">
          {{ errors.name[0] }}
        </div>
      </div>
    </div>
    <div>
      <label for="email">Email address</label>
      <div>
        <input id="email" v-model="form.email" type="email" name="email">
        <div v-if="errors.email">
          {{ errors.email[0] }}
        </div>
      </div>
    </div>
    <div>
      <label for="password">Password</label>
      <div>
        <input id="password" v-model="form.password" type="password" name="password">
        <div v-if="errors.password">
          {{ errors.password[0] }}
        </div>
      </div>
    </div>
    <button>Create an account</button>
  </form>
</template>
