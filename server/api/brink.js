// in this folder all code need to be exposed using this construction (build into nuxt)
// code in this file (in server/api) will be fired on the server (not in the browser)

export default defineEventHandler(async(event) => {

    // destruct any query params (see about.vue)
    // getQuery is a built in function to get any query params
console.log('test')
    const { name } = getQuery(event)

    // handle post data (see about.vue - data2)
    const { age } = await readBody(event)

    // if you want to call anything like an API from the server route you shoudl use $fetch instead useFetch
    // useFetch is just wrapper for $fetch
    const data  = await $fetch(`https://fakestoreapi.com/products/18`)
    console.log(data.title)
// en the thing you order is called ${data.title}
    return {
        message: `hello ${name}! You are ${age} years old, en the thing you order is called ${data.title}`
    }


})
