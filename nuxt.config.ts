// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [   "@nuxtjs/supabase", '@nuxtjs/tailwindcss', '@nuxt/content'  ],
    runtimeConfig: {
        supabaseUrl: process.env.SUPABASE_URL ,
        supabaseKey : process.env.SUPABASE_KEY
    }

})
