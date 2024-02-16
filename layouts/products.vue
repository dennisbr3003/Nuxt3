<template>
    <!-- Dit is een soort frame waarin andere view worden geladen. Je kunt hier alle crap kwijt die op elke pagina terug moet komen -->
    <!-- Deze is bedoeld voor productsindex. Daar kun je zien hoe je deze erin hangt-->
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Project X Merchandise</NuxtLink>
            </nav>
        </header>
        <!-- pages go here (where the slot tag is) -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <div />
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>            
            <div/>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Dit is een built-in  NuxtLink class. Als een NuxtLink 'active' is zit deze class erop. Bij de andere dus niet. */
.router-link-exact-active{
    color: #12b488;
}
</style>