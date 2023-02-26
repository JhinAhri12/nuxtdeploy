<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mt-8">
        <img class="w-full" src="../assets/img/job.jpg" alt="job">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{job.society}}</div>
            <p class="text-gray-700 text-base">
            {{ job.description }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#job</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nuxt</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nuxtjob</span>
        </div>
        <div v-show="user" class="px-6 py-4 pb-2">
            <button class="job px-3 py-1" @click="applyJob">Postuler</button>
        </div>
    </div>
    
</template>
<script setup>

    const { job } = defineProps(['job'])
    const user = useSupabaseUser();

    const name = computed(
        () => user.value?.email
    );

    async function applyJob(){
        await $fetch(`/api/application/manageApplication`,{
            method: 'POST',
            body: { event: 'APPLICATION_JOB','email': user.value?.email, 'society': job.society}
        })
    }
</script>
<style scoped>
.job {
    background-color: #0f5e59;
color:white;
padding: 10px
}
</style>