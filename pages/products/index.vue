<template>
    <div>
        Products index
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // https://fakestoreapi.com/
    // destructuring: fetch the data part of the response and call it product
    const { data:products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'MyBooking Nuxt | Products',
        meta: [
            {
                name: 'description', content: 'All there is to know about products'
            }
        ]
    })

</script>

<style scoped>

</style>