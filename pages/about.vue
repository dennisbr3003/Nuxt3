<template>
    <div>
        About {{ data }}
    </div>
</template>

<script setup>
    //const {data} = await useFetch('/api/brink?name=test')
    const { data } = await useFetch('/api/brink?name=test', {
        method: 'post',
        body:{
            age: 52
        }
    })
</script>

<style  scoped>

</style>