<script setup>
const config = useRuntimeConfig();
const client = useSupabaseAuthClient();
const state = reactive({
  loading: false,
  disabled: false,
  email: undefined,
  success: false,
  error: undefined,
});
const sendEmail = async () => {
  if (!state.email) {
    return (state.error = "Vous devez utiliser un email valide");
  }
  state.loading = true;
  let { data, error } = await client.auth.signInWithOtp({
    email: state.email,
  });
  if (data) {
    state.success = true;
  }
  if (error) {
    state.error = error.message;
  }
  state.loading = false;
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      text-center
      border
      rounded
      border-slate-400
      py-4
      px-5
      my-5
    "
    style="max-width: 800px"
  >
    <h1
      class="
        mb-4
        
      "
    >
      Formulaire d'inscription à Nuxt Jobs
    </h1>
    <div
      v-if="state.success"
      class="
        bg-teal-500/50
        border border-teal-500
        rounded
        px-3
        py-2
        mb-4
        text-white
      "
    >
      Ouvrez votre boîte e-mail pour vous connecter :)
    </div>
    <div v-else>
      <p class="mb-4">
        Pour vous incrire, ajoutez votre e-mail et vous recevrez un lien
        magique.
      </p>
      <input v-model="state.email" type="text" placeholder="email" class="border" />
      <div
        v-if="state.error"
        class="
          bg-red-500/50
          border border-red-500
          rounded
          px-3
          py-2
          mb-4
          text-white
        "
      >
        {{ state.error }}
      </div>
      <button
        :disabled="state.disabled"
        class="block mx-auto job"
        @click="sendEmail"
      >
        {{ state.loading ? "Loading..." : "Envoi du lien magique" }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.job{
background-color: #0f5e59;
color:white;
padding: 10px;
margin-top: 10px
}
</style>
