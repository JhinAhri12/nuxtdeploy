<template>
    <FormJob :title="title" :action="action" />
</template>

<script setup>
definePageMeta({
    middleware: "admin",
    });
 const title = 'Create'
 const action = 'POST'
</script>