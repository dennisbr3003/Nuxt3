<template>
    <div>
        <p>About {{ test }}</p>
        <p>ABout - 3 {{ zesty }}</p>
    </div>
</template>

<script setup>
    //const {data} = await useFetch('/api/brink?name=test')
    const { data:zesty } = await useFetch('/api/brink?name=test', {
        method: 'post',
        body:{
            age: 52
        }
    })
    const { data:test } = await useFetch('/api/product/7')

</script>

<style  scoped>

</style>