<template>

    <h1><b>Le site de référence pour trouver ton job sur Nuxt</b></h1>
    <button class="rounded">Je me lance </button>
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
            <JobList />
        </div>
        <div>
           <Filter />
        </div>
    </div>
    

</template>
<script setup>
    definePageMeta({
    middleware: "auth",
    });
    const user = useSupabaseUser();
    //deploy
</script>
<style scoped>
h1{
    color : #22c55d;
    margin-bottom: 10px;
    font-size: 2rem;
}
button{
background-color: #0f5e59;
color:white;
padding: 10px
}
</style>
