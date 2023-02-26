<template>
    <span>Nombre de jobs : {{ count._count._all }}</span> &nbsp;&nbsp;
    <button class="rounded job" @click="sortJobs">Trier </button>
    <div class="m-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" v-for="job in jobs">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ job.society }}</h2>
        <h3>Job Nuxt</h3>
        <span class="text-neutral-400">{{ job.description }}</span><br><br>
        <NuxtLink :to="`/job/${job.id}`" class="job">Voir le job</Nuxtlink>
    </div>
    
</template>

<script setup>

const sort = ref({ query: 'nothing'});
const { data : count  } =  await  useFetch(`/api/job/countJobs/`)    
const { data : jobs, pending, refresh, error } = await useFetch(() => `/api/job/job?query=${sort.value.query}`)

//sort job by society asc
function sortJobs () {
    sort.value.query = 'orderBy';
    refresh();
}
</script>
<style scoped>
.job {
    background-color: #0f5e59;
color:white;
padding: 10px
}
h2{
    color : #22c55d;
    margin-bottom: 10px;
    font-size: 1.5rem;
}
</style>