<template>
    <NuxtLink to="/" class="job"> Retour à la liste des jobs</NuxtLink>
    <JobDetails :job="job" />

    <div v-if="admin.isAdmin === true">
        <FormJob :title="title" :action="action" />

        <button class="job" @click="deleteJob">Supprimer le Job</button>
    </div>
</template>
<script setup>
    const user = useSupabaseUser();

    const title = 'Update'
    const action = 'PATCH'
    const { id } = useRoute().params
    const idJob = ref({ query: "getById", params: id});

    const admin = await $fetch(`/api/user/admin`, {
        method: 'POST',
        body: {event: 'IS_ADMIN', email: user.value?.email}
    })

    console.log(admin)
    const job = await $fetch(`/api/job/job?query=${idJob.value.query}&params=${idJob.value.params}`)

    async function deleteJob(){
        confirm('Êtes vous certain de supprimer ce job ?');
        await $fetch ( `/api/job/manageJob`,
            {
                method: 'DELETE',
                body: { event: 'DELETE_JOB', 'id': id },
            })
            return navigateTo('/')
    }
</script>
<style scoped>
.job {
    background-color: #0f5e59;
color:white;
padding: 10px
}
</style>
