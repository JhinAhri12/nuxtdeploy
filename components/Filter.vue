<template>
    <div class="bg-white w-max p-6 m-3 border border-gray-200 rounded-lg shadow ">
        <h1>Filtres :</h1>
        <input class="border-gray-300 sm:text-sm" type="text" placeholder="Ville"> <button class="rounded">Rechercher</button>
    </div>

</template>
<style scoped>
button{
    background-color: #0f5e59;
color:white;
padding: 10px
}
input {
    color: #15141aff;
font-size: 0.9rem;
line-height: 1.5;
border : 1px solid black;
margin: 0.4rem 0;
}
input:focus{
    border: #0f5e59;
}
</style>