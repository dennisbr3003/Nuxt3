<template>
    <div>
        <div>Product details for {{ id }}</div>
        <div>biba = bitterbal</div>
    </div>
</template>

<script setup>
    const { id }  = useRoute().params
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>