<template>
    <!-- Dit is een soort framne waarin andere view worden geladen. Ke kunt hier alle crap kwijt die op elke pagina terug moet komen -->
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Project X</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <!-- pages go here (where the slot tag is) -->
        <div>
            <slot />
        </div>
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