<template>
    <!-- Dit is een soort frame waarin andere view worden geladen. Je kunt hier alle crap kwijt die op elke pagina terug moet komen -->
    <!-- Deze is bedoeld voor productsindex. Daar kun je zien hoe je deze erin hangt-->
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Project X Merchandise</NuxtLink>
            </nav>
        </header>
        <!-- pages go here (where the slot tag is) -->
        <div>
            <slot />
        </div>
        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>            
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