<template>
    <h2 class="mb-2 text-2xl font-bold tracking-tight">Mon profil</h2>

    <p>Ma bio :</p> 

    <p>Liste des jobs auquel j'ai postuler :</p> 
    <div v-for="myJob in myJobs">
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img class="w-full" src="../../assets/img/job.jpg" alt="job">
            <div class="px-6 py-4 bg-white">
                
                <div>
                    <h3 class="mb-2 text-2xl font-bold tracking-tight"><NuxtLink :to="`/job/${myJob.job.id}`">{{ myJob.job.society }}</NuxtLink></h3>
                </div> 
                <div v-if="myJob.active"> Job actif</div>
                <div class="text-neutral-400" v-else>Job inactif</div>
            </div>
            
        </div>
            
    </div>

</template>
<script setup>
const user = useSupabaseUser();

const {data : myJobs } = await useFetch(`/api/application/application?email=${user.value?.email}`) 
 console.log(myJobs)   
</script>
<style scoped>
h2,h3 {
    color : #22c55d;
}

</style>