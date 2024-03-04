<template>
    <div>
        <Head>
            <Title>MyBooking Nuxt {{ id }} | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <div>Product details for {{ id }}</div>
        <div>biba = bitterbal</div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id }  = useRoute().params
    definePageMeta({
        layout: 'products'
    })

    // https://fakestoreapi.com/
    // destructuring: fetch the data part of the response and call it product
    const { data:product } = await useFetch(`https://fakestoreapi.com/products/${id}`)
    if(!product.value){
        throw createError({ statusCode: 404, message: `Unknown product id ${id}`, fatal: true})
    }

</script>

<style scoped>

</style>