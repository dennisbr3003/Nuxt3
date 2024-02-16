<template>
    <!-- Dit is een soort framne waarin andere view worden geladen. Ke kunt hier alle crap kwijt die op elke pagina terug moet komen -->
    <div>
        <header class="header">
            <nav class="nav">
                <NuxtLink to="/" class="toplink">Project X</NuxtLink>
                <ul class="navlinks">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <!-- pages go here (where the slot tag is) -->
        <div class="slotcontainer">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>
/* Dit is een built-in  NuxtLink class. Als een NuxtLink 'active' is zit deze class erop. Bij de andere dus niet. */
.router-link-exact-active{
    @apply text-[#12b488] border-b-[3px] border-b-[#12b488] pb-2;
}
.header{
    @apply shadow-sm bg-white min-h-[70px];
    .nav{
        @apply container mx-auto p-4 flex justify-between;
        .toplink{
            @apply font-bold;
        }
        .navlinks{
            @apply flex gap-4;
        }
    }
}
.slotcontainer{
    @apply container mx-auto p-4;
}
</style>
vb