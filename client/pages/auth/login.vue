<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:guest'],
})

const { login } = useSanctumAuth()

const form = reactive<LoginForm>({
  email: 'light@gmail.com',
  password: 'password',
})

const errors = shallowRef<ValidationErrors>({})

async function submit() {
  try {
    await login(form)
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
    <button type="submit">
      Submit
    </button>
  </form>
</template>
