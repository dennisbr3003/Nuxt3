export default  defineEventHandler(async(event) => {

    const { id } = event.context.params

    console.log(`https://fakestoreapi.com/products/${id}`)
    const { testKey } = useRuntimeConfig()

    const data3 = await $fetch(`https://fakestoreapi.com/products/${id}`)

    return {
        message: `hello unknown! You are XX years old, en the thing you order is called ${data3.title} aaaand this is the testkey ${testKey}`
    }


})